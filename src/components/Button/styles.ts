import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ width, maxWidth, height, background, theme, color, fontSize }) => css`
    width: ${width};
    max-width: ${maxWidth};
    height: ${height};
    background: ${background};
    margin-top: 30px;
    border-radius: 18px;
    box-shadow: 0px 3px 6px ${theme.colors.boxShadow};
    color: ${color};
    font-size: ${fontSize};
  `}
`
