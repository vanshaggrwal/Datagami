import { useEffect, useState } from 'react';

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>What We Offer</h2>
      <div
        style={{
          ...styles.grid,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
        }}
      >
        <Feature title="Data Analytics" description="Get deep insights from your data with powerful tools." />
        <Feature title="AI Solutions" description="Implement cutting-edge AI models in your business." />
        <Feature title="Custom Dashboards" description="Interactive and personalized dashboards built for you." />
      </div>
    </section>
  );
}

function Feature({ title, description }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  section: {
    padding: '4rem 1rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  card: {
    width: '100%',
    maxWidth: '280px',
    padding: '1.5rem',
    borderRadius: '10px',
    backgroundColor: '#f9fafb',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
  },
};
