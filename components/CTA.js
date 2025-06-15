import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section style={styles.cta}>
      <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '1rem' }}>
        Ready to transform your data journey?
      </h2>
      <Link href="/auth" style={{ ...styles.button, fontSize: isMobile ? '0.9rem' : '1rem' }}>
        Join Datagami
      </Link>
    </section>
  );
}

const styles = {
  cta: {
    backgroundColor: '#1e3a8a',
    color: '#fff',
    textAlign: 'center',
    padding: '3rem 2rem',
  },
  button: {
    marginTop: '1rem',
    backgroundColor: '#3b82f6',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#fff',
    display: 'inline-block',
  },
};
