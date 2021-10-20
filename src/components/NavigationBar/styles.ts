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

export const SingleNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media.greaterThan('medium')`
    flex-direction: row;
    width: fit-content;
    justify-content: space-between;
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
    color: ${theme.colors.gray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`
