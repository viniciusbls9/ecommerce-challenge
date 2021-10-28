import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
}

const Input: React.FC<InputProps> = ({ type, ...rest }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.Input type={type} {...rest} />
    </S.InputWrapper>
  )
}

export default Input
