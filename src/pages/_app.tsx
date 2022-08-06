import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import BasicLayout from "@/components/layout/basic";
import AuthProvider from "@/context/auth";
import ToastProvider from "@/context/toast";
import { theme } from "@/styles/theme";
import { NextPageWithLayout } from "@/types";
import "../styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout || ((page) => <BasicLayout>{page}</BasicLayout>);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <ToastProvider>{getLayout(<Component {...pageProps} />)}</ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
