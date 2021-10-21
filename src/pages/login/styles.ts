import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 15rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 20px;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 22px;
    line-height: 19px;
    color: ${theme.colors.black};
  `}
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
