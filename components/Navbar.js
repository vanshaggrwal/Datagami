'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showPrograms, setShowPrograms] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const programRef = useRef();
  const servicesRef = useRef();

  const serviceMenus = {
    'Software Consultancy': [
      { label: 'Managed Operations Center', path: '/services/moc' },
      { label: 'Network Operations Center', path: '/services/noc' },
      { label: 'Oracle ERP', path: '/services/erp' },
    ],
    'HR Consultancy': [
      { label: 'IT Hiring', path: '/services/it-hiring' },
    ],
  };

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initialize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (programRef.current && !programRef.current.contains(event.target)) {
        setShowPrograms(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServices(false);
        setActiveSubmenu(null);
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

      {/* Hamburger for mobile */}
      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
          ☰
        </button>
      )}

      {(menuOpen || !isMobile) && (
        <div
          style={{
            ...styles.links,
            ...(isMobile
              ? {
                  flexDirection: 'column',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '100%',
                  backgroundColor: '#fff',
                  padding: '1rem',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  zIndex: 999,
                }
              : {}),
          }}
        >
          <Link href="/" style={styles.link}>Home</Link>

          {/* Programs Dropdown */}
          {hasMounted && (
            <div ref={programRef} style={styles.dropdownContainer}>
              <button onClick={() => setShowPrograms(prev => !prev)} style={styles.linkdrop}>
                Programs <span style={styles.arrow}>▼</span>
              </button>
              {showPrograms && (
                <div style={styles.dropdown}>
                  <Link href="/programs/finlearn" style={styles.dropdownItem}>FinLearn</Link>
                  <Link href="/programs/ibm-ice" style={styles.dropdownItem}>IBM ICE</Link>
                  <Link href="/programs/techlearn" style={styles.dropdownItem}>TechLearn</Link>
                  <Link href="/programs/clinomic" style={styles.dropdownItem}>Clinomic</Link>
                </div>
              )}
            </div>
          )}

          {/* Other Services Dropdown */}
          {hasMounted && (
            <div
              ref={servicesRef}
              style={styles.dropdownContainer}
              onMouseLeave={() => {
                setShowServices(false);
                setActiveSubmenu(null);
              }}
            >
              <button
                onMouseEnter={() => setShowServices(true)}
                style={{ ...styles.linkdrop }}
              >
                Other Services <span style={styles.arrow}>▼</span>
              </button>

              {showServices && (
                <div style={styles.dropdown}>
                  {Object.keys(serviceMenus).map((mainItem) => (
                    <div
                      key={mainItem}
                      style={{
                        ...styles.dropdownItem,
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                      onMouseEnter={() => setActiveSubmenu(mainItem)}
                    >
                      {mainItem} <span style={{ fontSize: '0.8rem' }}>▶</span>

                      {activeSubmenu === mainItem && (
                        <div style={styles.submenu}>
                          {serviceMenus[mainItem].map((subItem) => (
                            <Link key={subItem.path} href={subItem.path} style={styles.submenuItem}>
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <Link href="/about" style={styles.link}>About</Link>
          <Link href="/contact-us" style={styles.link}>Contact Us</Link>
          <Link href="/login" style={styles.button}>Login</Link>
          <Link href="/auth" style={styles.button}>Register</Link>
        </div>
      )}
    </nav>
  );
}

// ========== STYLES ==========

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
   lineHeight: '1.5',             // Add this
  verticalAlign: 'middle',  
  fontFamily: 'inherit',   // Add this
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
  hamburger: {
    display: 'block',
    fontSize: '1.8rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#000',
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
   linkdrop: {
    ...baseLink,
     transform: 'translateY(-11px)',

    
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
    minWidth: '200px',
    padding: '0.5rem 0',
    display: 'flex',
    flexDirection: 'column',
  },
  dropdownItem: {
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    color: '#000',
    fontWeight: '400',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    position: 'relative',
  },
  submenu: {
    position: 'absolute',
    top: 0,
    left: '100%',
    marginLeft: '2px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    zIndex: 1001,
    padding: '0.5rem 0',
    minWidth: '220px',
    display: 'flex',
    flexDirection: 'column',
  },
  submenuItem: {
    padding: '0.5rem 1rem',
    color: '#000',
    fontSize: '0.95rem',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    textDecoration: 'none',
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
