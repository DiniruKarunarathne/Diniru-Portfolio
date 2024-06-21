import React from 'react';
import styles from './ProjectsStyles.module.css';
import projectImg1 from '../../assets/project-1.jpg';
import projectImg2 from '../../assets/project-2.jpg';
import projectImg3 from '../../assets/project-3.jpeg';

function Projects() {
  const projects = [
    {
      img: projectImg1,
      title: "Real Estate Marketplace app (MERN)",
      github: "https://github.com/DiniruKarunarathne/Real-estate---MERN",
      demo: "https://mern-estate-etd2.onrender.com/search?searchTerm="
    },
    {
      img: projectImg2,
      title: "A Health Care Management System (MERN)",
      github: "https://github.com/SLIITITP/ITP_WD_B07_G06",
      demo: "https://github.com/"
    },
    {
      img: projectImg3,
      title: "A Budget Planing Mobile Application (Kotlin)",
      github: "https://github.com/umeshadilshani/Pro-Planner",
      demo: "https://github.com/"
    },
  ];

  return (
    <section id='projects' className={styles.container}>
      <h3 className='sectionTitle'>Browse My Recent</h3>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.detailsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            
            <img src={project.img} alt={project.title} className={styles.projectImg} />
            <h2>{project.title}</h2>
            <div className={styles.btnC}>
              <button onClick={() => window.location.href = project.github}>Github</button>
              {/* Conditionally render the Live Demo button only if the index is 1 */}
              {index === 0 && (
                <button onClick={() => window.location.href = project.demo}>Live Demo</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

