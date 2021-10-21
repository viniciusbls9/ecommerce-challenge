import Button from '@/components/Button'
import Input from '@/components/Input'
import theme from '@/styles/theme'
import React, { FormEvent, useState } from 'react'
import * as S from './styles'

const Index: React.FC = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')

  const renderInputs = () => {
    const handleNextStep = (e: FormEvent) => {
      e.preventDefault()
      console.log({ name, lastName, phone })
    }

    return (
      <S.Form onSubmit={handleNextStep}>
        <S.Title>Criar conta</S.Title>

        <Input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <Input
          type="text"
          placeholder="sobrenome"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
        <Input
          type="number"
          placeholder="telefone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value)
          }}
        />

        <Button
          label="próximo"
          width="100%"
          maxWidth="302px"
          height="36px"
          background="linear-gradient(90deg, rgb(36, 201, 43), rgb(9, 159, 15))"
          color={theme.colors.white}
          fontSize={theme.font.sizes.medium}
        />
      </S.Form>
    )
  }

  return (
    <S.Wrapper>
      <S.Container>{renderInputs()}</S.Container>
    </S.Wrapper>
  )
}

export default Index
