import theme from 'styles/theme'
import { createElement } from 'react'
import * as S from './styles'

export interface StepsProgressProps {
  currentStep: number
}

const StepsProgress = ({ currentStep }: StepsProgressProps) => {
  const currentProgressValue =
    currentStep === 1 ? 10 : (100 / 3) * currentStep - 10

  const renderLoopProgressBullet = () => {
    const elementArray = []
    for (let index = 0; index <= 2; index++) {
      elementArray.push(
        createElement(S.ProgressBullet, {
          key: index,
          children: index + 1,
          bgColor:
            currentStep >= index + 1
              ? `${theme.colors.darkGreen}`
              : `${theme.colors.lightGray}`
        })
      )
    }
    return (
      <>
        {elementArray.map((el) => {
          return el
        })}
      </>
    )
  }

  return (
    <S.StepsProgressWrapper>
      <S.Progress value={currentProgressValue} max="100" />
      <S.StepsProgressBulletContainer>
        {renderLoopProgressBullet()}
      </S.StepsProgressBulletContainer>
    </S.StepsProgressWrapper>
  )
}

export default StepsProgress
