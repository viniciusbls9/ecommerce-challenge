import Header from '@/components/Header'
import { AppProps } from 'next/app'
import Theme from 'styles/theme'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import Footer from '@/components/Footer'
import * as S from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Head>
        <title>Ecommerce</title>
        <link
          rel="shortcut icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple proct starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <S.DefaultLayout>
        <Header />
        <S.PagesWrapper>
          <Component {...pageProps} />
        </S.PagesWrapper>
        <Footer />
      </S.DefaultLayout>
    </ThemeProvider>
  )
}

export default App
