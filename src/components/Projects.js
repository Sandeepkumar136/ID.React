// src/components/Gallery.js
import React, { useState, useEffect } from 'react';

const projectsPerPage = 3; // Number of projects per page

export default function Projects({ onLoadingStart, onLoadingStop }) {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (onLoadingStart && onLoadingStop) {
      onLoadingStart();
      // Simulate loading time
      setTimeout(() => {
        onLoadingStop();
      }, 1000);
    }
  }, [onLoadingStart, onLoadingStop]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('./data.json'); // Ensure this path is correct
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const displayProjects = () => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <section className="Projects-contain">
        <h2 className="global-heading testi-head">Projects</h2>
        <div className="Project-container">
          <div className="projects" id="projects">
            {displayProjects().map((project, index) => (
              <div key={index} className="project">
                <div className="img-overflow">
                  <img src={project.img} className="project-img" alt={project.alt} />
                </div>
                <div className="project-text-overflow">
                  <h3>{project.heading}</h3>
                  <p className="label-p">{project.label}</p>
                  <p className="project-disc">{project.description}</p>
                  <a href={project.explore_link} target="_blank" rel="noopener noreferrer">Explore</a>
                </div>
              </div>
            ))}
          </div>
          <div className="P-toggle-btns">
            <button type="button" id="Preview-btn" onClick={prevPage}>
              <i className='bx bx-chevrons-left bx-burst'></i>
            </button>
            <div id="pagination-buttons">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  type="button"
                  className={`num-toggle-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => goToPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button type="button" id="Next-btn" onClick={nextPage}>
              <i className='bx bx-chevrons-right bx-burst'></i>
            </button>
          </div>
          <p className="page-numbers" id="page-numbers">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      </section>
    </div>
  );
}
