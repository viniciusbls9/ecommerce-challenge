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
  label: string
  onClick?: () => void
  color: string
  fontSize: string
  id?: string
  boxShadow?: string
  border?: string
  as?: ElementType
} & ButtonTypes

const Button = ({
  width,
  maxWidth,
  height,
  background,
  label,
  onClick,
  color,
  fontSize,
  id,
  boxShadow,
  border,
  ...props
}: ButtonProps) => (
  <S.ButtonWrapper
    width={width}
    maxWidth={maxWidth}
    height={height}
    background={background}
    label={label}
    onClick={onClick}
    color={color}
    fontSize={fontSize}
    id={id}
    boxShadow={boxShadow}
    border={border}
    {...props}
  >
    {label}
  </S.ButtonWrapper>
)

export default Button
