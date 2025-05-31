'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link href="/">
          <img src="/logo.webp" alt="Datagami Logo" style={{ height: '40px' }} />
        </Link>
      </div>

      <div style={styles.links}>
        <Link href="/" style={styles.link}>Home</Link>

        <div ref={dropdownRef} style={styles.dropdownContainer}>
          <button
            onClick={() => setShowDropdown(prev => !prev)}
            style={styles.linkLifted}
          >
            Programs <span style={styles.arrow}>▼</span>
          </button>

          {showDropdown && (
            <div style={styles.dropdown}>
              <Link href="/programs/finlearn" style={styles.dropdownItem}>FinLearn</Link>
              <Link href="/programs/ibm-ice" style={styles.dropdownItem}>IBM ICE</Link>
              <Link href="/programs/techlearn" style={styles.dropdownItem}>TechLearn</Link>
              <Link href="/programs/clinomic" style={styles.dropdownItem}>Clinomic</Link>
            </div>
          )}
        </div>

        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/contact-us" style={styles.link}>Contact Us</Link>
        <Link href="/login" style={styles.button}>Login</Link>
        <Link href="/auth" style={styles.button}>Register</Link>
      </div>
    </nav>
  );
}

const baseLink = {
  padding: '0.5rem 0.75rem',
  fontSize: '1rem',
  fontWeight: '500',
  textDecoration: 'none',
  color: '#000',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    position: 'relative',
    zIndex: 1000,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '3rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    position: 'relative',
  },
  link: {
    ...baseLink,
  },
  linkLifted: {
    ...baseLink,
    transform: 'translateY(-13px)',
  },
  arrow: {
    fontSize: '0.8rem',
    marginLeft: '4px',
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: '2.8rem',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
    zIndex: 1000,
    minWidth: '160px',
    padding: '0.5rem 0',
  },
  dropdownItem: {
    display: 'block',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    color: '#000',
    fontWeight: '400',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
  button: {
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '500',
  },
};
