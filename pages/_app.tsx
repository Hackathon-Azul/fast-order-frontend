import { ThemeProvider } from "styled-components";
import "../styles/globals.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store";
import GlobalStyles from "styles/global";
import theme from "styles/theme";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Pedido Rápido</title>
            <link rel="icon" href="/favicon.png" />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
