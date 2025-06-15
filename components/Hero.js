import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section style={styles.hero}>
      <h1 style={{ ...styles.title, fontSize: isMobile ? '2rem' : '3rem' }}>
        Welcome to Datagami
      </h1>
      <p style={{ ...styles.subtitle, fontSize: isMobile ? '1rem' : '1.25rem' }}>
        Unleashing data innovation for the future.
      </p>
    </section>
  );
}
const styles = {
  hero: {
    width: '100%',
    height: '80vh',
    boxSizing: 'border-box',
    background: 'linear-gradient(135deg, #facc15, #fbbf24)',
    color: '#1f2937',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 1rem',
  },
  title: {
    fontWeight: 'bold',
    maxWidth: '100%', // Prevent overflow
  },
  subtitle: {
    marginTop: '1rem',
    maxWidth: '600px',
    width: '100%', // Add this too
  },
};
