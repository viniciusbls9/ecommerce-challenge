import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export const DefaultLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-areas:
    'header'
    'page'
    'footer'
    'navigationBar';
  grid-template-rows: 5.6rem 1fr 10.5rem 5.6rem;
  grid-template-columns: 1fr;

  ${media.greaterThan('medium')`
    grid-template-areas:
      'header'
      'navigationBar'
      'page'
      'footer';
      grid-template-rows: 8rem 5.6rem 1fr 13.5rem;
      grid-template-columns: 1fr;
  `}
`

export const PagesWrapper = styled.div`
  grid-area: page;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default GlobalStyles
