import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
  children?: string[]
}

const Input: React.FC<InputProps> = ({
  type,
  children,
  ...rest
}: InputProps) => {
  if (type === 'select') {
    return (
      <S.InputSelect>
        {children?.map((item) => (
          <S.Options key={item}>{item}</S.Options>
        ))}
      </S.InputSelect>
    )
  }

  return (
    <S.InputWrapper>
      <S.Input type={type} {...rest} />
    </S.InputWrapper>
  )
}

export default Input
