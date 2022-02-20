import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.scss'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Head>
        <title>Pedido Rápido</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
