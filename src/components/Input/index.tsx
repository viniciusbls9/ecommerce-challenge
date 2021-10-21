import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  type?: string
}

const Input: React.FC<InputProps> = ({ name, type, ...rest }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.Input type={type} id={name} {...rest} />
    </S.InputWrapper>
  )
}

export default Input
