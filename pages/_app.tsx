import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.scss'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    header: '#014E70'
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Head>
        <title>Pedido Rápido</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Component {...pageProps} />
      </ThemeProvider>
      </PersistGate>
    </Provider>
    </>
  )
}
