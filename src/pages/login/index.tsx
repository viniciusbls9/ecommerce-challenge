import React, { useState, useRef } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'
import ProgressionStep from '@/components/ProgressionStep'
import theme from '@/styles/theme'
import * as S from './styles'

const Index: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [stepType, setStepType] = useState('login')

  const [loginName, setLoginName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const tabRef = useRef<HTMLDivElement>(null)

  const renderLoginFields = () => {
    return (
      <S.InputStep>
        <Input
          type="text"
          placeholder="nome"
          value={loginName}
          onChange={(e) => {
            setLoginName(e.target.value)
          }}
        />
        <Input
          type="text"
          placeholder="sobrenome"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value)
          }}
        />
      </S.InputStep>
    )
  }

  const renderInputsStepOne = () => {
    return (
      <S.InputStep>
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
      </S.InputStep>
    )
  }

  const renderInputsStepTwo = () => {
    return (
      <S.InputStep className="hidden">
        <Input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <Input
          type="text"
          placeholder="criar senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </S.InputStep>
    )
  }

  const renderInputsStepThree = () => {
    return (
      <S.InputStep className="hidden">
        <Input
          type="text"
          placeholder="cep"
          value={cep}
          onChange={(e) => {
            setCep(e.target.value)
          }}
        />

        <Input
          type="text"
          placeholder="rua"
          value={street}
          onChange={(e) => {
            setStreet(e.target.value)
          }}
        />

        <Input
          type="text"
          placeholder="cidade"
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        />

        <Input
          type="text"
          placeholder="pais"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value)
          }}
        />
      </S.InputStep>
    )
  }

  const handleNextStep = () => {
    if (currentStep === 3) return false
    tabRef.current?.children[currentStep - 1].classList.toggle('hidden')
    tabRef.current?.children[currentStep].classList.remove('hidden')
    setCurrentStep(currentStep + 1)
  }

  const handleBackStep = () => {
    tabRef.current?.children[currentStep - 1].classList.toggle('hidden')
    tabRef.current?.children[currentStep - 2].classList.toggle('hidden')
    setCurrentStep(currentStep - 1)
  }

  const renderRegisterInputs = () => {
    return (
      <S.FormsWrapper>
        <S.Title>Criar conta</S.Title>

        <ProgressionStep currentStep={currentStep} />

        <S.TabContentWrapper ref={tabRef}>
          {renderInputsStepOne()}
          {renderInputsStepTwo()}
          {renderInputsStepThree()}
        </S.TabContentWrapper>

        <Button
          label={currentStep === 3 ? 'cadastrar' : 'próximo'}
          width="100%"
          maxWidth="302px"
          height="36px"
          background="linear-gradient(90deg, rgb(36, 201, 43), rgb(9, 159, 15))"
          color={theme.colors.white}
          fontSize={theme.font.sizes.medium}
          boxShadow={`0px 3px 6px ${theme.colors.boxShadow}`}
          onClick={() => handleNextStep()}
        />

        {currentStep > 1 && (
          <Button
            label="voltar"
            width="100%"
            maxWidth="302px"
            height="36px"
            background="transparent"
            color={theme.colors.black}
            fontSize={theme.font.sizes.medium}
            border={`1px solid ${theme.colors.black}`}
            onClick={() => handleBackStep()}
          />
        )}

        <S.AlreadyAccountWrapper>
          <S.Paragraph>
            Já tem uma conta?{' '}
            <S.Link onClick={() => setStepType('login')}>entrar</S.Link>
          </S.Paragraph>
        </S.AlreadyAccountWrapper>
      </S.FormsWrapper>
    )
  }

  const renderLoginInputs = () => {
    return (
      <S.FormsWrapper>
        <S.Title>Entrar</S.Title>

        <S.TabContentWrapper>{renderLoginFields()}</S.TabContentWrapper>

        <Button
          label="ver produtos"
          width="100%"
          maxWidth="302px"
          height="36px"
          background="linear-gradient(90deg, rgb(36, 201, 43), rgb(9, 159, 15))"
          color={theme.colors.white}
          fontSize={theme.font.sizes.medium}
          boxShadow={`0px 3px 6px ${theme.colors.boxShadow}`}
          onClick={() => handleNextStep()}
        />

        <S.AlreadyAccountWrapper>
          <S.Paragraph>
            não tem uma conta?{' '}
            <S.Link onClick={() => setStepType('register')}>cadastrar</S.Link>
          </S.Paragraph>
        </S.AlreadyAccountWrapper>
      </S.FormsWrapper>
    )
  }

  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        {stepType === 'login' ? renderLoginInputs() : renderRegisterInputs()}
      </S.LoginContainer>
    </S.LoginWrapper>
  )
}

export default Index
