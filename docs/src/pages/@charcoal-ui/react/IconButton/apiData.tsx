import { IconButtonProps } from '@charcoal-ui/react'
import { ComponentPropsWithRef } from 'react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<IconButtonProps<'button'>, HTMLButtonElement>,
  keyof Omit<ComponentPropsWithRef<'button'>, 'disabled'>
> = {
  as: {
    description: 'コンポーネントのルートノードとして描画する要素',
    type: "T extends React.ElementType = 'button'",
    default: 'button',
  },
  disabled: {
    default: 'false',
    description: '無効化',
    type: 'boolean',
  },
  icon: {
    default: '',
    description: 'アイコン',
    required: true,
    type: 'IconName',
  },
  size: {
    default: '"M"',
    description: '大きさ、XSの場合は16px、Mの場合は24pxのアイコンのみ使用可能',
    type: '"XS" | "S" | "M"',
  },
  variant: {
    default: '"Default"',
    description: 'スタイルの種類',
    type: '"Default" | "Overlay"',
  },
  isActive: {
    description: 'ボタンの押下状態',
    type: 'boolean',
    default: 'false',
  },
  componentAs: {
    description: 'as で指定したコンポーネントの as プロパティ',
    type: 'React.ElementType',
  },
}
