import Link from 'next/link';

export default function CTA() {
  return (
    <section style={styles.cta}>
      <h2>Ready to transform your data journey?</h2>
      <Link href="/auth" style={styles.button}>Join Datagami</Link>
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
