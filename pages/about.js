export default function About() {
    const styles = {
      container: {
        padding: '2rem 5%',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9fb',
        color: '#1e1e1e',
        lineHeight: '1.6',
      },
      section: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        gap: '2rem',
      },
      reversedSection: {
        flexDirection: 'row-reverse',
      },
      textBlock: {
        flex: '1',
        minWidth: '300px',
      },
      image: {
        flex: '1',
        maxWidth: '400px',
        minWidth: '250px',
        height: 'auto',
        borderRadius: '10px',
      },
      image2: {
        flex: '1',
        maxWidth: '250px',
        minWidth: '50px',
        height: 'auto',
        borderRadius: '10px',
      },

      heading: {
        fontSize: '2rem',
        color: '#1E1E5B',
        marginBottom: '0.75rem',
      },
      paragraph: {
        fontSize: '1.05rem',
        color: '#333',
        marginBottom: '1rem',
      },
      list: {
        paddingLeft: '1.5rem',
        fontSize: '1.05rem',
        color: '#444',
      },
      listItem: {
        marginBottom: '0.75rem',
      },
    };
  
    return (
      <div style={styles.container}>
        {/* About Us Section */}
        <div style={{ ...styles.section, ...styles.reversedSection }}>
          <div style={styles.textBlock}>
            <h1 style={styles.heading}>About Us</h1>
            <p style={styles.paragraph}>
              Datagami is a pioneering digital technology and consulting firm specializing in cutting-edge solutions. 
              We excel in harnessing new age digital technologies such as artificial intelligence, machine learning, 
              big data analytics, cybersecurity, and blockchain to drive innovation and business growth.
            </p>
            <p style={styles.paragraph}>
              Our expert consulting teams are skilled in innovating, designing, and disrupting markets, leveraging AI and 
              ML tools to enhance business stability and scalability.
            </p>
            <p style={styles.paragraph}>
              Our focus extends to the education sector, where we collaborate with educational institutions and industry 
              partners to deliver industry-aligned programs. These programs equip students with in-depth applied knowledge 
              and ensure their readiness for the job market.
            </p>
          </div>
          <img src="https://www.datagami.in/_next/image?url=https%3A%2F%2Fstrapiojzhystore.blob.core.windows.net%2Fstrapi-uploads%2Fassets%2F1_2e634cad16.png&w=1200&q=75" alt="About Us" style={styles.image} />
        </div>
  
        {/* Mission + Vision Section (Shared Image) */}
        <div style={styles.section}>
          <div style={styles.textBlock}>
            <h1 style={styles.heading}>Mission</h1>
            <p style={styles.paragraph}>
              Our mission is to empower individuals through our comprehensive education programs. We are dedicated to providing 
              accessible and high-quality learning opportunities that inspire personal growth and prepare individuals for 
              an ever-evolving world.
            </p>
            <p style={styles.paragraph}>
              Our commitment to excellence ensures that everyone, regardless of their background or circumstances, can unlock 
              their full potential & achieve their educational aspirations.
            </p>
  
            <h1 style={{ ...styles.heading, marginTop: '2rem' }}>Vision Statement</h1>
            <p style={styles.paragraph}>
              Our vision is to create a world where education is a beacon of opportunity, empowering every individual to thrive 
              in an ever-changing landscape. We aspire to be a catalyst for positive transformation, fostering a culture of 
              lifelong learning and innovation.
            </p>
            <p style={styles.paragraph}>
              Through our unwavering commitment to accessibility, excellence, and inclusivity, we envision a future where every 
              person has the tools and support they need to reach their highest potential and contribute meaningfully to society.
            </p>
          </div>
          <img src="https://www.datagami.in/assets/img/about-1/1.svg" alt="Mission and Vision" style={styles.image} />
        </div>
  
        {/* Our Solutions Section */}
        <div style={{ ...styles.section, ...styles.reversedSection }}>
          <div style={styles.textBlock}>
            <h1 style={styles.heading}>Our Solutions</h1>
            <ul style={styles.list}>
              <li style={styles.listItem}>Wide range of industry-aligned programs. Consistent delivery with minimal faculty follow-up.</li>
              <li style={styles.listItem}>Advises on best-suited programs for university needs. Integrated & short-term options available.</li>
              <li style={styles.listItem}>Continuous faculty development. Access to a wide network of industry experts.</li>
              <li style={styles.listItem}>Provides internship and job placement opportunities in relevant domains.</li>
              <li style={styles.listItem}>Expert guidance to align university courses with NEP 2020 guidelines.</li>
            </ul>
          </div>
          <img src="https://www.datagami.in/_next/image?url=https%3A%2F%2Fstrapiojzhystore.blob.core.windows.net%2Fstrapi-uploads%2Fassets%2Fpexels_fauxels_3184287_dde55aca36.jpg&w=1200&q=75" alt="Solutions" style={styles.image2} />
        </div>
      </div>
    );
  }
  