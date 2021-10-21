import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const NavigationWrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    box-shadow: 0px -3px 10px #00000029;
    background-color: ${theme.colors.white};
    height: ${theme.spacings.xxlarge};

    position: absolute;
    bottom: 0;
    z-index: 10;

    ${media.greaterThan('medium')`
      position: initial;
    `}
  `}
`

interface NavigationContainerProps {
  repeatCount: number
}

export const NavigationContainer = styled.div<NavigationContainerProps>`
  ${({ theme, repeatCount }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    height: 100%;
    margin: 0 auto;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(${repeatCount}, 1fr);
    gap: 10px;
    align-items: center;

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
