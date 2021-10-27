import Input from '@/components/Input'
import React from 'react'
import * as S from './styled'

const Home: React.FC = () => {
  const renderInputFilter = () => {
    const filters = ['menor preço', 'a-z', 'mais recentes']
    return (
      <S.HeaderWrapper>
        <S.Title>Sugestões para você</S.Title>

        <Input type="select">{filters}</Input>
      </S.HeaderWrapper>
    )
  }
  // const renderCards = () => {}
  return <S.HomeWrapper>{renderInputFilter()}</S.HomeWrapper>
}

export default Home
