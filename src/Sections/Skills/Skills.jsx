import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../Components/Theme/ThemeContext'; 
import styles from './SkillsStyles.module.css';


import CplusLight from '../../assets/CplusLight.png';
import CplusDark from '../../assets/CplusDarkpng.png'; 
import KotlinLight from '../../assets/KotlinLight.png'; 
import KotlinDark from '../../assets/KotlinDark.png';

function Skills() {
  const { theme, toggleTheme } = useTheme();

  const skills = [
    { icon: faHtml5, title: "HTML" },
    { icon: faCss3Alt, title: "CSS" },
    { icon: faJs, title: "JavaScript" },
    { icon: faReact, title: "React" },
    { icon: faNodeJs, title: "Node.js" },
    { icon: faJava, title: "Java" },
    { icon: faC, title: "C" },
    { image: CplusLight, darkImage: CplusDark, title: "C++" },
    { image: KotlinLight, darkImage: KotlinDark, title: "Kotlin" }
  ];

  return (
    <section id="skills" className={`${styles.container} ${styles[theme]}`}>
      <h1>My Skills</h1>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            {skill.icon ? (
              <FontAwesomeIcon icon={skill.icon} className={styles.skillIcon} />
            ) : (
              <img 
                src={theme === 'light' ? skill.image : skill.darkImage} 
                alt={skill.title} 
                className={styles.skillImage} 
              />
            )}
            <h2 className={styles.skillTitle}>{skill.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

