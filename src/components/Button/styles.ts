import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const ButtonWrapper = styled.button<ButtonProps>`
  ${({
    width,
    maxWidth,
    height,
    background,
    color,
    fontSize,
    boxShadow,
    border
  }) => css`
    width: ${width};
    max-width: ${maxWidth};
    height: ${height};
    background: ${background};
    margin-top: 30px;
    border-radius: 18px;
    box-shadow: ${boxShadow};
    color: ${color};
    font-size: ${fontSize};
    border: ${border};
  `}
`
