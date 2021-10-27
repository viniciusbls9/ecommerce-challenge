import styled, { css } from 'styled-components'

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  padding: 0 20px;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 22px;
    line-height: 19px;
    color: ${theme.colors.black};
    margin-bottom: 30px;
  `}
`

export const FormsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TabContentWrapper = styled.div`
  width: 100%;
`

export const InputStep = styled.div`
  width: 100%;

  &.hidden {
    display: none;
  }
`
export const AlreadyAccountWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.spacings.small};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    cursor: pointer;
    text-decoration: underline;
  `}
`
