import React from "react";
import github from '../assets/icons/github.png';
import css_file from '../assets/icons/css_file.png';
import html_file from '../assets/icons/html_file.png';
import js_file from '../assets/icons/html_file.png';

interface ProjectCardProps {
  projectPreviewURL: string;
  projectName: string;
  projectDescription: string;
  githubReposURL: string;
  urlAccessProject: string;
  isMobileData?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectPreviewURL,
  projectName,
  projectDescription,
  githubReposURL,
  urlAccessProject,
  isMobileData,
}) => {
  return (
    <div className="swiper-slide swiper-slide-header__content-wrapper-card-item">
      <div
        className="swiper-slide-header__content-wrapper-card-item-main"
        data-aos="fade-left"
      >
        <div className="swiper-slide-header__content-wrapper-card-item-main-img" 
        style={{backgroundImage: `url(${projectPreviewURL})`}} ></div>
        <div className="swiper-slide-header__content-wrapper-card-item-main__content">
          <h3 data-aos="fade-up">{projectName}</h3>
          <p data-aos="fade-right">{projectDescription}</p>
        </div>
        <div className="container" data-aos="fade-up">
          <h4>Build with:&nbsp;</h4>
          <div className="row">
            <a href="https://google.com">
              <img
                src={html_file}
                alt="Html Icon Language"
                title="HTML base foundation of course"
              />
            </a>
            <a href="https://google.com">
              <img
                src={css_file}
                alt="Css Icon Language"
                title="CSS UI Design Style used"
              />
            </a>
            <a href="https://google.com">
              <img
                src={js_file}
                alt="Javascript Icon Language"
                title="Then Javascript"
              />
            </a>
          </div>
        </div>
        <div className="container">
          <h4>Get project on : </h4>
          <div className="row">
            <a href={githubReposURL} target="_blank" rel="noopener">
              <img
                src={github}
                alt="Github Account"
                title="Get this project on Github Now."
              />
            </a>
          </div>
        </div>
        <a href={urlAccessProject} target={isMobileData ? "_parent" : "_blank"}>
          <div className="swiper-slide-header__content-card-item-main-more-btn">
            {isMobileData ? "Get App" : "Get Demo"}
          </div>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
