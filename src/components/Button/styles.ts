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
    border,
    margin
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${width};
    max-width: ${maxWidth};
    height: ${height};
    background: ${background};
    margin: ${margin};
    border-radius: 1.8rem;
    box-shadow: ${boxShadow};
    color: ${color};
    font-size: ${fontSize};
    border: ${border};
  `}
`
