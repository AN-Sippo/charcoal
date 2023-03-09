import { CSSObject, ThemedStyledInterface } from 'styled-components'
import {
  factory,
  modifiedFactory,
  constFactory,
  modifiedArgumentedFactory,
  onEffectPseudo,
  isSupportedEffect,
} from './builders/lib'
import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import {
  objectAssign,
  unreachable,
  ReadonlyArrayConstructor,
  objectKeys,
  isPresent,
  noThemeProvider,
} from './util'
import { columnSystem } from '@charcoal-ui/foundation'
import {
  halfLeading,
  dur,
  GradientDirection,
  notDisabledSelector,
  px,
} from '@charcoal-ui/utils'
import {
  Context,
  Internal,
  internal,
  TRANSITION_DURATION,
  useHalfLeadingCanceller,
  __DO_NOT_USE_GET_INTERNAL__,
} from './builders/internal'
import { createColorCss, createGradientColorCss } from './builders/colors'
export { type Modified, type ModifiedArgumented } from './builders/lib'
export { default as TokenInjector } from './TokenInjector'
export {
  getThemeSync,
  themeSetter,
  themeSelector,
  prefersColorScheme,
  useTheme,
  useThemeSetter,
  useLocalStorage,
  useMedia,
} from './helper'
export { defineThemeVariables } from './util'
export * from './SetThemeScript'

const spacingProperties = ['margin', 'padding'] as const
const spacingDirections = [
  'top',
  'right',
  'bottom',
  'left',
  'vertical',
  'horizontal',
  'all',
] as const
type SpacingProperty = typeof spacingProperties[number]
type SpacingDirection = typeof spacingDirections[number]

const fixedProperties = ['width', 'height'] as const
type FixedProperty = typeof fixedProperties[number]

const borderDirections = ['top', 'right', 'bottom', 'left'] as const
type BorderDirection = typeof borderDirections[number]

const outlineType = ['focus'] as const
type OutlineType = typeof outlineType[number]

/**
 * `theme(o => [...])` の `o` の部分を構築する
 *
 * @param theme テーマオブジェクト
 * @param isPhantom 型推論のためだけに使う場合にランタイムコストをゼロにするフラグ
 */
function builder<T extends CharcoalAbstractTheme>(
  theme: {
    // factoryの第二引数に入れ込むものだけ明示的に型変数を展開しておくことで型の具象化を遅延する
    color: T['color']
    gradientColor: T['gradientColor']
    border: T['border']
    outline: T['outline']
  } & Omit<T, 'color' | 'gradientColor' | 'border' | 'outline'>,
  isPhantom = false
) {
  if (isPhantom) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {} as never
  }
  const colors = objectKeys(theme.color)
  const effects = objectKeys(theme.effect)

  // 色
  const gradientColors = objectKeys(theme.gradientColor)
  const colorCss = createColorCss(theme)
  const gradientColorCss = createGradientColorCss(theme)
  const colorObject = constFactory(
    {},
    {
      bg: objectAssign(
        factory({}, colors, (color) =>
          modifiedFactory(effects, (modifiers) =>
            colorCss('bg', color, modifiers)
          )
        ),
        factory(
          {},
          gradientColors,
          (color) => (direction: GradientDirection) =>
            modifiedFactory(effects, (modifiers) =>
              gradientColorCss(color, modifiers, direction)
            )
        )
      ),
      font: factory({}, colors, (color) =>
        modifiedFactory(effects, (modifiers) =>
          colorCss('font', color, modifiers)
        )
      ),
    }
  )

  // タイポグラフィ
  const typographyModifiers = [
    // TODO
    'monospace',
    'bold',
    'preserveHalfLeading',
  ] as const
  const typographyCss = createTypographyCss(theme)
  const typographyObject = factory(
    {},
    ['typography'] as const,
    (_) => (size: keyof T['typography']['size']) =>
      modifiedFactory(typographyModifiers, (modifiers) =>
        typographyCss(size, {
          preserveHalfLeading: modifiers.includes('preserveHalfLeading'),
          monospace: modifiers.includes('monospace'),
          bold: modifiers.includes('bold'),
        })
      )
  )

  // スペーシング
  const spacingCss = createSpacingCss(theme)
  const spacingObject = factory({}, spacingProperties, (spacingProperty) =>
    modifiedArgumentedFactory(
      spacingDirections,
      (modifiers) => spacingCss(spacingProperty, modifiers),
      {} as keyof T['spacing'] | 'auto' // 推論のためのメタタイプ
    )
  )

  // 大きさ
  const fixedPxCss = createFixedPxCss(theme)
  const fixedColumnCss = createFixedColumnCss(theme)
  const fixedRelativeCss = createFixedRelativeCss(theme)
  const fixedObject = factory({}, fixedProperties, (property) =>
    constFactory(
      {},
      {
        px: (size: keyof T['spacing'] | 'auto') => fixedPxCss(property, size),
        column: (span: number) => fixedColumnCss(property, span),
        auto: fixedRelativeCss(property, 'auto'),
        full: fixedRelativeCss(property, '100%'),
      }
    )
  )

  // 要素へのエフェクト (etc: 透過)
  const elementEffectCss = createElementEffectCss(theme)
  const elementEffectObject = modifiedFactory(
    objectKeys(theme.elementEffect),
    (modifiers) => elementEffectCss(modifiers)
  )

  // ボーダー
  const borderCss = createBorderCss(theme)
  const borderObject = constFactory(
    {},
    {
      border: factory({}, objectKeys(theme.border), (variant) =>
        modifiedFactory(borderDirections, (modifiers) =>
          borderCss(variant, modifiers)
        )
      ),
    }
  )

  // 角丸
  const borderRadiusCss = createBorderRadiusCss(theme)
  const borderRadiusObject = constFactory(
    {},
    {
      borderRadius: (radius: keyof T['borderRadius']) =>
        borderRadiusCss(radius),
    }
  )

  // アウトライン
  const outlineCss = createOutlineColorCss(theme)
  const outlineObject = constFactory(
    {},
    {
      outline: factory({}, objectKeys(theme.outline), (variant) =>
        modifiedFactory(outlineType, (modifiers) =>
          outlineCss(variant, modifiers)
        )
      ),
    }
  )

  return objectAssign(
    colorObject,
    typographyObject,
    spacingObject,
    fixedObject,
    elementEffectObject,
    borderObject,
    borderRadiusObject,
    outlineObject
  )
}

/**
 * @see https://developer.mozilla.org/ja/docs/Web/CSS/:focus-visible#selectively_showing_the_focus_indicator
 */
const onFocus = (css: CSSObject) => ({
  [notDisabledSelector]: {
    '&:focus, &:active': {
      outline: 'none',
      ...css,
    },

    '&:focus:not(:focus-visible), &:active:not(:focus-visible)': {
      outline: 'none',
    },

    '&:focus-visible': {
      outline: 'none',
      ...css,
    },
  },
})

const outlineCss = (weight: number, color: string) => ({
  boxShadow: `0 0 0 ${px(weight)} ${color}`,
})

const createOutlineColorCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (
    variant: keyof T['outline'],
    modifiers: readonly OutlineType[]
  ): Internal => {
    const weight = theme.outline[variant].weight
    const color = theme.outline[variant].color
    return internal(
      () =>
        modifiers.includes('focus')
          ? onFocus(outlineCss(weight, color))
          : { '&&': { [notDisabledSelector]: outlineCss(weight, color) } },
      {
        boxShadowTransition: true,
      }
    )
  }

const createTypographyCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (
    size: keyof T['typography']['size'],
    options: {
      preserveHalfLeading?: boolean
      monospace?: boolean
      bold?: boolean
    } = {}
  ): Internal => {
    const {
      preserveHalfLeading = false,
      monospace = false,
      bold = false,
    } = options
    const descriptor = theme.typography.size[size]
    const margin = -halfLeading(descriptor)

    return internal(
      (context) => ({
        fontSize: px(descriptor.fontSize),
        lineHeight: px(descriptor.lineHeight),
        ...(monospace && {
          fontFamily: 'monospace',
        }),
        ...(bold && {
          fontWeight: 'bold',
        }),
        ...(useHalfLeadingCanceller(context) && {
          // prevent margin collapsing
          display: 'flow-root',
          // cancel half-leading with negative margin
          '&::before': {
            ...leadingCancel,
            marginTop: px(margin),
          },
          '&::after': {
            ...leadingCancel,
            marginBottom: px(margin),
          },
        }),
      }),
      !preserveHalfLeading
        ? {
            cancelHalfLeadingPx: margin,
          }
        : {}
    )
  }

const leadingCancel: CSSObject = {
  display: 'block',
  width: 0,
  height: 0,
  content: `''`,
}

function spacingProperty(
  property: SpacingProperty,
  direction: 'top' | 'right' | 'bottom' | 'left'
) {
  return `${property}-${direction}`
}

const createSpacingCss =
  <T extends CharcoalAbstractTheme>(theme: { spacing: T['spacing'] }) =>
  (
    property: SpacingProperty,
    modifiers: readonly [SpacingDirection, keyof T['spacing'] | 'auto'][]
  ): Internal => {
    const { top, right, bottom, left } = modifiers.reduce(
      (acc, [direction, size]) => {
        if (direction === 'all') {
          acc.top = size
          acc.right = size
          acc.bottom = size
          acc.left = size
        } else if (direction === 'vertical') {
          acc.top = size
          acc.bottom = size
        } else if (direction === 'horizontal') {
          acc.right = size
          acc.left = size
        } else {
          acc[direction] = size
        }
        return acc
      },
      {} as Partial<
        Record<'top' | 'right' | 'bottom' | 'left', keyof T['spacing'] | 'auto'>
      >
    )

    const hasVerticalPadding =
      property === 'padding' &&
      top !== undefined &&
      bottom !== undefined &&
      top !== 'auto' &&
      bottom !== 'auto'

    return internal(
      ({ cancelHalfLeadingPx = 0 }) => ({
        ...(top !== undefined && {
          [spacingProperty(property, 'top')]:
            top === 'auto'
              ? 'auto'
              : px(
                  theme.spacing[top] +
                    (hasVerticalPadding ? cancelHalfLeadingPx : 0)
                ),
        }),
        ...(bottom !== undefined && {
          [spacingProperty(property, 'bottom')]:
            bottom === 'auto'
              ? 'auto'
              : px(
                  theme.spacing[bottom] +
                    (hasVerticalPadding ? cancelHalfLeadingPx : 0)
                ),
        }),
        ...(right !== undefined && {
          [spacingProperty(property, 'right')]:
            right === 'auto' ? 'auto' : px(theme.spacing[right]),
        }),
        ...(left !== undefined && {
          [spacingProperty(property, 'left')]:
            left === 'auto' ? 'auto' : px(theme.spacing[left]),
        }),
      }),
      hasVerticalPadding ? { hasVerticalPadding: true } : {}
    )
  }

const createFixedPxCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (property: FixedProperty, size: keyof T['spacing'] | 'auto'): Internal =>
    internal(() => ({
      [property]: size === 'auto' ? 'auto' : px(theme.spacing[size]),
    }))

const createFixedRelativeCss =
  <T extends CharcoalAbstractTheme>(_theme: T) =>
  (property: FixedProperty, amount: '100%' | 'auto'): Internal =>
    internal(() => ({
      [property]: amount,
    }))

const createFixedColumnCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (property: FixedProperty, span: number): Internal =>
    internal(() => ({
      [property]: px(
        columnSystem(span, theme.grid.unit.column, theme.grid.unit.gutter)
      ),
    }))

const createElementEffectCss =
  <
    T extends CharcoalAbstractTheme,
    TElementEffect extends T['elementEffect']
  >(theme: {
    elementEffect: TElementEffect
  }) =>
  (effects: readonly (keyof TElementEffect)[] = []): Internal =>
    internal(() =>
      effects.filter(isSupportedEffect).reduce<CSSObject>(
        (acc, effect) => ({
          ...acc,
          ...onEffectPseudo(effect, {
            opacity:
              !(Array as ReadonlyArrayConstructor).isArray(
                theme.elementEffect[effect]
              ) && theme.elementEffect[effect]?.type === 'opacity'
                ? theme.elementEffect[effect]?.opacity
                : unreachable(),
          }),
        }),
        {}
      )
    )

function borderProperty(direction: BorderDirection) {
  return `border-${direction}`
}

function borderShorthand(color: string) {
  return `solid 1px ${color}`
}

const createBorderCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (
    variant: keyof T['border'],
    directions: readonly BorderDirection[]
  ): Internal => {
    const all = directions.length === 0
    const value = borderShorthand(theme.border[variant].color)
    return internal(() => ({
      ...(all
        ? { border: value }
        : directions.reduce<CSSObject>(
            (acc, direction) => ({
              ...acc,
              [borderProperty(direction)]: value,
            }),
            {}
          )),
    }))
  }

const createBorderRadiusCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (size: keyof T['borderRadius']): Internal =>
    internal(() => ({
      borderRadius: px(theme.borderRadius[size]),
    }))

const commonSpec = (_theme: unknown): Internal => {
  const duration = dur(TRANSITION_DURATION)
  const transition = (property: string[]) => ({
    transition: property.map((v) => `${duration} ${v}`).join(', '),
  })
  return internal(
    ({
      colorTransition = false,
      backgroundColorTransition = false,
      boxShadowTransition = false,
    }) =>
      transition(
        [
          colorTransition ? 'color' : null,
          backgroundColorTransition ? 'background-color' : null,
          boxShadowTransition ? 'box-shadow' : null,
        ].filter(isPresent)
      )
  )
}

type Blank = null | undefined | false

const nonBlank = <T>(value: T): value is T extends Blank ? never : T =>
  isPresent(value) && (value as unknown) !== false

/**
 * `theme(o => [...])` の `theme` ユーティリティを構築する
 *
 * @param _styled styled-componnets の `styled` そのもの (型推論のために用いられる)
 *
 * @example
 *
 * import styled from 'styled-components'
 * const theme = createTheme(styled)
 *
 * @example
 *
 * const theme = createTheme<DefaultTheme>()
 */
export function createTheme<T extends CharcoalAbstractTheme>(
  _styled?: ThemedStyledInterface<T>
) {
  // `theme(o => [...])` の `o` の部分の型推論のためだけに使う意味のない変数
  // Tを型変数のまま渡してcreateThemeが呼ばれるまで型の具象化が行われないようにする
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
  const _phantomBuilder = builder<T>({} as any, true)
  // ランタイムの `theme(o => [...])` のインターフェースを構築する
  return (
      // ユーザー定義
      spec: (
        o: typeof _phantomBuilder
      ) => Blank | Internal | (Blank | Internal)[]
    ): ThemeProp<T> =>
    ({ theme }) => {
      if (!isPresent(theme)) {
        // テーマが入っていない場合は復旧不可能なのでエラーにする
        throw noThemeProvider
      }
      // styled-componentsのランタイムから受け取ったthemeオブジェクトをbuilderに食わせて`o`をつくる
      // さらに、ユーザー定義にbuilderが構築した`o`を食わせる
      // (`o`を一時変数に入れてしまうと型Tの具象化が行われるので関数合成を優先する)
      const rawSpecDescriptor = spec(builder(theme))
      // ユーザー定義の配列を整形
      const specDescriptor = [
        ...(Array.isArray(rawSpecDescriptor)
          ? rawSpecDescriptor
          : [rawSpecDescriptor]),
        commonSpec(theme),
      ].filter(nonBlank)

      // 1パス目
      // 全ユーザー定義を舐めて相互に影響し合う定義をチェックし、その結果(コンテキスト)を取得
      const context = specDescriptor.reduce<Context>(
        (acc, v) => ({ ...acc, ...__DO_NOT_USE_GET_INTERNAL__(v).context }),
        {}
      )
      // 2パス目
      // コンテキストを見ながら最適化されたCSSを構築
      return specDescriptor.map((v) =>
        __DO_NOT_USE_GET_INTERNAL__(v).operation(context)
      )
    }
}

export type ThemeProp<T> = ({
  theme,
}: {
  theme: T | undefined
}) => CSSObject | CSSObject[]
