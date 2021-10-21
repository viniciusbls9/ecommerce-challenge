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
  padding: 20px;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 22px;
    line-height: 19px;
    color: ${theme.colors.black};
    margin-bottom: 30px;
  `}
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
