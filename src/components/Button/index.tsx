/* eslint-disable react/prop-types */
import React from 'react'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  width: string
  maxWidth: string
  height: string
  background: string
  backgroundHover?: string
  label: string
  onClick?: () => void
  color: string
  fontSize: string
  id?: string
  boxShadow?: string
  border?: string
  margin?: string
  innerRef?: React.ForwardedRef<unknown>
  props?: {
    children?: React.ReactNode
  }
  as?: ElementType
} & ButtonTypes

// eslint-disable-next-line react/display-name
const Button = React.forwardRef<ButtonTypes, ButtonProps>((props, ref) => (
  <S.ButtonWrapper innerRef={ref} {...props}>
    {props.label}
  </S.ButtonWrapper>
))

export default Button
