import { AppProps } from 'next/app';
import NoSSRIndexPage from './index';

const App = ({ Component, pageProps }: AppProps) => {
  if (Component === NoSSRIndexPage) {
    return <NoSSRIndexPage />;
  }

  return <Component {...pageProps} />;
};

export default App;
