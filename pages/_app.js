import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/login.css';
import '../styles/register.css';
import '../styles/Footer.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
