'use client';
import Image from 'next/image';
import Img1   from './images/moc1.jpeg';
import Img2   from './images/noc1.webp';


export default function noc() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <p style={styles.servicesDetails}>Services Details</p>
          <h1 style={styles.title}>
            <span style={styles.titleBold}>Network</span><br />
            <span style={styles.titleHighlight}>Operations Center (NOC)</span>
          </h1>
          <p style={styles.serviceList}>
            Our global compliance service partner – eProtect 360
          </p>
        </div>
        <Image
          src={Img1}
          alt="Team working"
          width={500}
          height={350}
          style={styles.image}
        />
      </section>

      {/* Description Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Network Services</h2>
        <h3 style={styles.subheading}>What we do?</h3>
        <div style={styles.contentRow}>
          <Image
            src={Img2}
            alt="Person working"
            width={400}
            height={300}
            style={styles.image}
          />
          <p style={styles.description}>
            Continuously monitoring a wide variety of information and network systems that include communications circuits, cloud resources, LAN/WAN systems, routers, switches, firewalls and VoIP systems and application delivery.
Providing timely response to all incidents, outages and performance issues.
Categorizing issues for escalation to appropriate technical teams.
Recognizing, identifying and prioritizing incidents in accordance with customer business requirements, organizational policies and operational impact.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={styles.newsletter}>
        <h3 style={styles.newsletterTitle}>Subscribe our Newsletter &</h3>
        <p style={styles.newsletterText}>
          Subscribe to get Latest News, Offer and connect With Us.
        </p>
        <div style={styles.subscribeBox}>
          <input type="email" placeholder="Your Email..." style={styles.input} />
          <button style={styles.submit}>Submit</button>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'sans-serif',
    lineHeight: 1.6,
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '3rem',
    backgroundColor: '#f6fff8',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  servicesDetails: {
    color: '#f59e0b',
    fontWeight: '500',
  },
  title: {
    margin: '1rem 0',
    fontSize: '2.5rem',
  },
  titleBold: {
    fontWeight: '700',
    color: '#111827',
  },
  titleHighlight: {
    color: '#fbbf24',
    fontWeight: '700',
  },
  serviceList: {
    marginTop: '1rem',
    color: '#111',
  },
  image: {
    borderRadius: '12px',
    marginTop: '1rem',
  },
  section: {
    padding: '3rem',
    backgroundColor: '#f9f9ff',
  },
  sectionTitle: {
    color: '#fbbf24',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  subheading: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111827',
    margin: '1rem 0',
  },
  contentRow: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  description: {
    maxWidth: '600px',
    color: '#374151',
  },
  newsletter: {
    padding: '3rem',
    backgroundColor: '#e0e7ff',
    textAlign: 'center',
    borderRadius: '12px',
    margin: '2rem',
  },
  newsletterTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  newsletterText: {
    marginBottom: '1rem',
  },
  subscribeBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    minWidth: '250px',
  },
  submit: {
    backgroundColor: '#fbbf24',
    color: '#fff',
    padding: '0.75rem 1.25rem',
    borderRadius: '6px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
  },
};
