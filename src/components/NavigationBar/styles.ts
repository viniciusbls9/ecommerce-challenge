import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  width: 100%;

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
  ${({ repeatCount }) => css`
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(${repeatCount}, 1fr);
    gap: 10px;

    box-shadow: 0px -3px 6px #00000029;
  `}
`

export const SingleNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:last-child {
    width: 70px;
  }
`
export const NavigationIconImg = styled.img`
  width: 18px;
  height: 18px;
`
export const NavigationName = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-family: ${theme.font.family};
    /* font-size: ${theme.font.sizes.xsmall}; */
  `}
`
