import './index.css'

import { ForwardedRef, ReactNode, forwardRef, useMemo } from 'react'

import { CustomJSXElement } from '../DropdownSelector/ListItem'

type Variant = 'Primary' | 'Default' | 'Overlay' | 'Danger' | 'Navigation'

type Size = 'S' | 'M'

export type ButtonProps<T extends CustomJSXElement = 'button'> = {
  children?: ReactNode
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  isActive?: boolean
  as?: T
} & Omit<React.ComponentPropsWithRef<T>, 'children'>

const Button = forwardRef(function Button<T extends CustomJSXElement>(
  {
    variant,
    fullWidth,
    size,
    className,
    as,
    isActive,
    ...props
  }: ButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const Component = useMemo(() => as ?? 'button', [as])
  const classNames = useMemo(
    () => ['charcoal-button', className].filter((v) => v).join(' '),
    [className]
  )
  return (
    <Component
      {...props}
      className={classNames}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth}
      data-active={isActive}
      ref={ref}
    />
  )
}) as <T extends CustomJSXElement = 'button'>(p: ButtonProps<T>) => JSX.Element
export default Button
