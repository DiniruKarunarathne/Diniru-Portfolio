import React, { useState } from 'react';
import styles from './HeaderStyle.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={`${styles.header} ${styles.desktopNav}`}>
        <div className={styles.logo}>John Doe</div>
        <div>
          <ul className={styles.navLinks}>
            <li><a href="#about" className={styles.navLink}>About</a></li>
            <li><a href="#experience" className={styles.navLink}>Experience</a></li>
            <li><a href="#projects" className={styles.navLink}>Projects</a></li>
            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav className={`${styles.header} ${styles.hamburgerNav}`}>
        <div className={styles.logo}>John Doe</div>
        <div className={styles.hamburgerMenu}>
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
          </div>
          <ul className={styles.menuLinks}>
            <li><a href="#about" className={styles.navLink} onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" className={styles.navLink} onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" className={styles.navLink} onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className={styles.navLink} onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
