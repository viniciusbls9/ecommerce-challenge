import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;

  & + div {
    margin-top: 1rem;
  }
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.xxlarge};
    border: 1px solid ${theme.colors.black};
    padding: 1rem;
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
    height: 4.5rem;
    border: 1px solid ${theme.colors.primary};
    padding: 1rem;
  `}
`

export const Options = styled.option`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.black};
    padding: 2rem;
  `}
`
