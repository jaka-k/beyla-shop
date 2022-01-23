import store from '../redux/store';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import '../styles/globals.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </Provider>
    </>
  );
}

export default MyApp;
