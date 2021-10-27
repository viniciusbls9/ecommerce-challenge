import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  type?: string
  children?: string[]
}

const Input: React.FC<InputProps> = ({
  name,
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
      <S.Input type={type} id={name} {...rest} />
    </S.InputWrapper>
  )
}

export default Input
