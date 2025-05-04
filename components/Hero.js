export default function Hero() {
    return (
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to Datagami</h1>
        <p style={styles.subtitle}>Unleashing data innovation for the future.</p>
      </section>
    );
  }
  
  const styles = {
    hero: {
      height: '80vh',
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
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: '1.25rem',
      marginTop: '1rem',
      maxWidth: '600px',
    },
  };
  