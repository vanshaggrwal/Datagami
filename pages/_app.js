import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Footer.css';
import '../styles/login.css';
import '../styles/contactus.css'; // Importing CSS module
import '../styles/register.css';



export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
