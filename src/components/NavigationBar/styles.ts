import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  width: 100%;
  box-shadow: 0px -3px 10px #00000029;

  position: absolute;
  bottom: 0;

  ${media.greaterThan('medium')`
    position: initial;
  `}
`

interface ContainerProps {
  repeatCount: number
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, repeatCount }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(${repeatCount}, 1fr);
    gap: 10px;

    ${media.greaterThan('large')`
      gap: 100px;
    `}
  `}
`

interface SingleNavigationContainerProps {
  isActive: boolean
}

export const SingleNavigationContainer = styled.a<SingleNavigationContainerProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${isActive ? `${theme.colors.primary}` : `${theme.colors.gray}`};
    cursor: pointer;

    ${media.greaterThan('medium')`
      flex-direction: row;
      width: fit-content;
      justify-content: space-between;
    `}
  `}
`
export const NavigationIconImg = styled.img`
  width: 18px;
  height: 18px;

  ${media.greaterThan('medium')`
    width: 22px;
    height: 22px;
    margin-right: 15px;
  `}
`
export const NavigationName = styled.h5`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`
