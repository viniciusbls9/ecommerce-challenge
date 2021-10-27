import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;

  & + div {
    margin-top: 10px;
  }
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.xxlarge};
    border: 1px solid ${theme.colors.black};
    padding: 10px;
    border-radius: 6px;

    &:focus {
      outline: none;
      border: 2px solid ${theme.colors.primary};
    }
  `}
`

export const InputSelect = styled.select`
  ${({ theme }) => css`
    width: 100%;
    height: 45px;
    border: 1px solid ${theme.colors.primary};
    padding: 1rem;
  `}
`

export const Options = styled.option`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.black};
    padding: 20px;
  `}
`
