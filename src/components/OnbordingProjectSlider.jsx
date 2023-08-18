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
            <p data-aos='fade-left'>
              Frontend-only projects (UI/UX) using a variety of technologies,
              highlighting my expertise in the development of modern, fluid user
              interfaces.
            </p>
            <div className='project-slider-nav'>
              <div className='p-p-indicator p-p-indic-prev' onClick={this.prevSlide}>
                <img src='../../src/assets/icons/left-arrow.png' alt='left arrow control'/>
              </div>
              <div className='p-p-indicator p-p-indic-next' onClick={this.nextSlide}>
                <img src='../../src/assets/icons/right-arrow.png' alt='right arrow control' />
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
                snap: true,
                // autoplay: true,
                isNavigation: false,
                focus: 0,
                perPage: 2.6,
                // interval: 2000,
                pagination: false,
                rewind: true,
                loop: true
              }}
              onMoved={(splide) => this.setState({currentSlide: splide.index})}
              ref={this.splideRef}
            >
              <SplideSlide>
                <ProjectCard
                  projectPreviewURL=''
                  projectName='My Own Portfolio'
                  projectDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, adipisicing'
                  urlAccessProject='rpg'
                  githubReposURL='rpg'
                />
              </SplideSlide>
              <SplideSlide>
                <ProjectCard
                  projectPreviewURL=''
                  projectName='My Own Portfolio'
                  projectDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, adipisicing'
                  urlAccessProject='rpg'
                  githubReposURL='rpg'
                />
              </SplideSlide>
              <SplideSlide>
                <ProjectCard
                  projectPreviewURL=''
                  projectName='My Own Portfolio'
                  projectDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, adipisicing'
                  urlAccessProject='rpg'
                  githubReposURL='rpg'
                />
              </SplideSlide>
              <SplideSlide>
                <ProjectCard
                  projectPreviewURL=''
                  projectName='My Own Portfolio'
                  projectDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, adipisicing'
                  urlAccessProject='rpg'
                  githubReposURL='rpg'
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
    );
  }
}
