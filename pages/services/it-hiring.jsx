'use client';
import Image from 'next/image';
import Img1   from './images/moc1.jpeg';
import Img2   from './images/it.webp';


export default function ithiring() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <p style={styles.servicesDetails}>Services Details</p>
          <h1 style={styles.title}>
            <span style={styles.titleBold}>IT</span><br />
            <span style={styles.titleHighlight}>Hiring</span>
          </h1>
          <p style={styles.serviceList}>
           HR Consulting is a critical component of any business that wants to attract<br></br> and retain top talent. For IT-related hiring, the stakes are even higher, given <br></br>the fierce competition for skilled professionals in the technology industry.
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
        <h2 style={styles.sectionTitle}>IT Hiring Services</h2>
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
            At our HR consulting firm, we specialize in helping businesses navigate the complexities of IT-related hiring. With a deep understanding of the latest trends and best practices in the tech industry, we provide expert guidance and support to help our clients find and hire the best IT professionals for their needs.
Our team of experienced HR consultants brings a wealth of knowledge and expertise to every project. We work closely with our clients to understand their unique needs and requirements, and to develop customized strategies that align with their business goals and objectives.
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
