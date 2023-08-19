import React from 'react';
import ProjectCard from './ProjectCard.tsx';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
    console.info('Preview Slide Targeted');
    console.info(this.splideRef.current);
  };

  nextSlide = () => {
    this.splideRef.current.splide.go(this.state.currentSlide + 1);
    console.info(this.splideRef.current);
    console.info('Nexted Slide Targeted');
  };

  render() {
    return (
      <section className='swiper-slide'>
        <div className='swiper-slide-header'>
          <h2 data-aos='fade-up'>
            {this.props.headTitle} <span data-aos='fade-down'>+27</span>{' '}
          </h2>
          <div className='row'>
            <p data-aos='fade-left'>{this.props.headDescription}</p>
            <div className='project-slider-nav'>
              <div
                className='p-p-indicator p-p-indic-prev'
                onClick={this.prevSlide}
              >
                <img
                  src='../../src/assets/icons/left-arrow.png'
                  alt='left arrow control'
                />
              </div>
              <div
                className='p-p-indicator p-p-indic-next'
                onClick={this.nextSlide}
              >
                <img
                  src='../../src/assets/icons/right-arrow.png'
                  alt='right arrow control'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='swiper-slide-header__content'>
          <div className='swiper-slide-header__content-wrapper'>
            <Splide
              arial-label='My Projects'
              className='splide-workspace-render'
              options={{
                arrows: false,
                pagination: false,
                snap: true,
                focus: 0,
                perPage: 2.6,
                rewind: true,
                loop: true,
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
