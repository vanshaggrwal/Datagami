import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
      <Link href="/">
          
            <img src="/logo.webp" alt="Datagami Logo" style={{ height: '40px' }} /></Link>
          
      
      </div>
      <div style={styles.links}>
      <Link href="/" style={styles.link}>Home</Link>
        <Link href="/about" style={styles.link}>About</Link> 
        <Link href="/contact-us" style={styles.link}>ContactUs</Link>
        <Link href="/login" style={styles.button}>Login </Link>
        <Link href="/auth" style={styles.button}>Register </Link>
       

      </div>
    </nav>
  );
}

const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#ffffff', // white background
      borderBottom: '1px solid #e5e7eb',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '3rem',
    },
    links: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
    },
    link: {
      color: '#000', // black text
      textDecoration: 'none',
      fontWeight: '500',
    },
    button: {
      backgroundColor: '#2563eb',
      color: '#fff',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: '500',
    },
  };
  