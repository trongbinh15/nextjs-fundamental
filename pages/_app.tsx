import '../styles/base.css'
import '../styles/fonts.css'
import '../styles/main.css'
import '../styles/vendor.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
