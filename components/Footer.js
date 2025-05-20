
import { FaPhone, FaEnvelope, FaBriefcase, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Column */}
        <div className="footer-section">
          <img src="/logo.webp" alt="Datagami Logo" className="footer-logo" />
          <p className="footer-tagline">“Lead Digital Technology”</p>

          <div className="footer-item">
            <FaPhone />
            <div>
              <strong>Phone:</strong>
              <p>+91 97029 34397 / +91 77381 70621</p>
            </div>
          </div>

          <div className="footer-item">
            <FaEnvelope />
            <div>
              <strong>Email:</strong>
              <p>info@datagami.in</p>
            </div>
          </div>

          <div className="footer-item">
            <FaBriefcase />
            <div>
              <strong>Address:</strong>
              <p>
                309, Crescent Business Square,<br />
                Khairani Rd, Saki Naka, Mumbai,<br />
                Maharashtra 400072
              </p>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="footer-section">
          <strong>Follow us on social media</strong>
          <div className="footer-icons">
            <FaGithub />
            <FaInstagram />
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-section">
          <strong>Get In Touch</strong>
          <div className="footer-input-group">
            <input type="email" placeholder="Your Email" />
            <button>➜</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Terms & Conditions</p>
        <p>© 2024 Datagami Technologies. All Right Reserved.</p>
      </div>
    </footer>
  );
}
