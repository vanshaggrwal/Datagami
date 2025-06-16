// components/Footer.js
import React from 'react';

import { FaPhone, FaEnvelope, FaBriefcase, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
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
              <div>+91 97029 34397 / +91 77381 70621</div>
            </div>
          </div>

          <div className="footer-item">
            <FaEnvelope />
            <div>
              <strong>Email:</strong>
              <div>info@datagami.in</div>
            </div>
          </div>

          <div className="footer-item">
            <FaBriefcase />
            <div>
              <strong>Address:</strong>
              <div>
                309, Crescent Business Square,<br />
                Khairani Rd, Saki Naka, Mumbai,<br />
                Maharashtra 400072
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="footer-section">
          <p><strong>Follow us on social media</strong></p>
          <div className="footer-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-section">
          <p><strong>Get In Touch</strong></p>
          <div className="footer-input-group">
            <input type="email" placeholder="Your Email" />
            <button>➜</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Terms & Conditions</p>
        <p>© 2024 Datagami Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
