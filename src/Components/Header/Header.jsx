import React, { useState } from 'react';
import styles from './HeaderStyle.module.css';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Diniru</div>
      <nav className={styles.desktopNav}>
        <ul className={styles.navLinks}>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
          <li><a href="#skills" className={styles.navLink}>Skills</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
      <div className={styles.mobileNav}>
        <a onClick={toggleSidebar} className={styles.menu}>
          &#9776;
        </a>
        {sidebarOpen && (
          <div className={styles.sidebar}>
            <button onClick={toggleSidebar} className={styles.closeButton}>
              &times;
            </button>
            <ul className={styles.navLinksMobile}>
              <li><a href="#about" className={styles.navLink} onClick={toggleSidebar}>About</a></li>
              <li><a href="#projects" className={styles.navLink} onClick={toggleSidebar}>Projects</a></li>
              <li><a href="#experience" className={styles.navLink} onClick={toggleSidebar}>Experience</a></li>
              <li><a href="#contact" className={styles.navLink} onClick={toggleSidebar}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
