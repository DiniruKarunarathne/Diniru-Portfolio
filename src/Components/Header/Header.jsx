import React, { useState } from 'react';
import styles from './HeaderStyle.module.css';

const Header = () => {
  

  return (
    <header>
      <nav className={`${styles.header} ${styles.desktopNav}`}>
        <div className={styles.logo}>Diniru</div>
        <div>
          <ul className={styles.navLinks}>
            <li><a href="#about" className={styles.navLink}>About</a></li>
            <li><a href="#experience" className={styles.navLink}>Experience</a></li>
            <li><a href="#projects" className={styles.navLink}>Projects</a></li>
            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
