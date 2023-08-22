import React from "react";
import ProjectCard from "./ProjectCard.tsx";
import arrow_left from '../assets/icons/left-arrow.png';
import arrow_right from '../assets/icons/right-arrow.png';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export class OnbordingProjectSlider extends React.Component {
  constructor(props) {
    super(props);
    this.splideRef = React.createRef();
    this.state = {
      currentSlide: 0,
    };
  }

  prevSlide = () => {
    this.splideRef.current.splide.go(this.state.currentSlide - 1);
    console.info("Preview Slide Targeted");
    console.info(this.splideRef.current);
  };

  nextSlide = () => {
    this.splideRef.current.splide.go(this.state.currentSlide + 1);
    console.info(this.splideRef.current);
    console.info("Nexted Slide Targeted");
  };

  render() {
    return (
      <section className="swiper-slide">
        <div className="swiper-slide-header">
          <h2 data-aos="fade-up">
            {this.props.headTitle}{" "}
            <a
              href="https://github.com/Misfit-Franck/"
              target="_blank"
              rel="noopener"
              title="Avaible on Github"
            >
              <span data-aos="fade-down" className="project-count-indicator">
                +{this.props.moreProjectCount}
              </span>{" "}
            </a>
          </h2>
          <div className="row">
            <p data-aos="fade-left">{this.props.headDescription}</p>
            <div className="project-slider-nav">
              <div
                className="p-p-indicator p-p-indic-prev"
                onClick={this.prevSlide}
              >
                <img
                  src={arrow_left}
                  alt="left arrow control"
                />
              </div>
              <div
                className="p-p-indicator p-p-indic-next"
                onClick={this.nextSlide}
              >
                <img
                  src={arrow_right}
                  alt="right arrow control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide-header__content">
          <div className="swiper-slide-header__content-wrapper">
            <Splide
              arial-label="My Projects"
              className="splide-workspace-render"
              options={{
                arrows: false,
                pagination: false,
                snap: true,
                focus: 0,
                perPage: 2.6,
                rewind: true,
                loop: true,
                breakpoints: {
                  600: {
                    perPage: 1,
                    arrows: true,
                  },
                  360: {
                    perPage: 1,
                    arrows: true,
                  },
                  412: {
                    perPage: 1,
                    arrows: true,
                  },
                  1159: {
                    perPage: 2.3,
                  },
                  1038: {
                    perPage: 2.2,
                  },
                  1068: {
                    perPage: 2.1,
                  },
                  1104: {
                    perPage: 2.2,
                  },
                  1024: {
                    perPage: 2,
                  },
                  1175: {
                    perPage: 2.3,
                  },
                  1272: {
                    perPage: 2.4,
                  },
                  1134: {
                    perPage: 2.2,
                  },
                  1090: {
                    perPage: 2.1,
                  },
                  1041: {
                    perPage: 2,
                  },
                  1028: {
                    perPage: 2,
                  },
                  1033: {
                    perPage: 2.1,
                  },
                  911: {
                    perPage: 1.9,
                  },
                  1273: {
                    perPage: 2.5
                  },
                  1272: {
                    perPage: 2.5
                  },
                  1270: {
                    perPage: 2.5
                  }
                },
              }}
              onMoved={(splide) =>
                this.setState({ currentSlide: splide.index })
              }
              ref={this.splideRef}
            >
              {this.props.projects.map((project) => (
                <SplideSlide key={project.id}>
                  <ProjectCard
                    projectPreviewURL={project.urlPreview}
                    projectName={project.name}
                    projectDescription={project.description}
                    urlAccessProject={project.urlAccess}
                    githubReposURL={project.urlGitRepos}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>
    );
  }
}
