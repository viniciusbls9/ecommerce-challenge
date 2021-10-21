import * as S from './styles'

export interface ButtonProps {
  width: string
  maxWidth: string
  height: string
  background: string
  label: string
  onClick?: () => void
  color: string
  fontSize: string
}

const Button = ({
  width,
  maxWidth,
  height,
  background,
  label,
  onClick,
  color,
  fontSize
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
  >
    {label}
  </S.ButtonWrapper>
)

export default Button
