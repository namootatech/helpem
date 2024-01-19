import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "@/store";
import { getThemeConfig } from "@/themes";
export default function MyApp({ Component, pageProps }) {
  const theme = getThemeConfig()
  return (
    <>
      <Provider store={store}>
        <NextNProgress color={theme.progressColor} />
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}
