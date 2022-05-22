import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/layout/footer";
import Head from "next/head";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Element Coffee Roasters</title>
        <meta name="description" content="Онлайн магазин на Element Coffee Roasters - семейна кафе пекарна в Стара Загора, България" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </Layout>
  );
}

export default MyApp;
