import React from 'react'
import styles from './ProfileStyles.module.css'
import profImg from '../../assets/Profile-2.png'
import lightMode from '../../assets/darkmode.png'
import DarkMode from '../../assets/lightmode.png' 
import CV from '../../assets/CV Diniru Karunarathne.pdf'
import { useTheme } from '../../Components/Theme/ThemeContext'

function Profile() {
    const { theme , toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? lightMode : DarkMode;
    const githubIcon = theme === 'light' ? 'https://img.icons8.com/?size=30&id=12599&format=png&color=000000' : 'https://img.icons8.com/?size=30&id=12599&format=png&color=FFFFFF';
    const linkedinIcon = theme === 'light' ? 'https://img.icons8.com/?size=30&id=8808&format=png&color=000000' : 'https://img.icons8.com/?size=30&id=8808&format=png&color=FFFFFF';

  return (
    <section id='Profile' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.ProfileImg} src={profImg} alt="Profile photo"/>
            <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Diniru <br/> Karunarathna</h1>
            <h2>Software Developer</h2>
            <span>
            <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/diniru-karunarathna-47a760215/" target='_blank' rel='noopener noreferrer'>
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/DiniruKarunarathne" target='_blank' rel='noopener noreferrer'>
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                </div>
            </span>
            <p className={styles.description}>
                Crafting intuitive and responsive user interfaces with modern web technologies.
            </p>
            <a href={CV} download>
                <button className='hover btn' >Download CV</button>
            </a>
        </div>
    </section>
  )
}

export default Profile