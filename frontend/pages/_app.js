import store from '../redux/store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import Header from '../components/Header';
import '../styles/globals.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <CookiesProvider>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </Provider>
    </CookiesProvider>
    </>
  );
}

export default MyApp;
