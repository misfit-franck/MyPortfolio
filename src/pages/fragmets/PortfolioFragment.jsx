/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import '../../css/index.css';
import '../../css/Portfolio.css';
import { OnbordingProjectSlider } from '../../components/OnbordingProjectSlider';
import {
  FrontEndProjects,
  MobileAppsProjects,
  FullStacksAppsProjects,
} from '../../projects.js';

export class PortfolioFragment extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: false,
      accessibility: true,
      focusOnSelect: true,
      pauseOnHover: false,
    };
    const OnBordingProjectsStruct = [
      {
        'key': '0',
        'title': 'Frontend Projects',
        'description': 'Frontend-only projects (UI/UX) using a variety of technologies,highlighting my expertise in the development of modern, fluid user interfaces.',
        'projects': FrontEndProjects,
      },
      {
        'key': '1',
        'title': 'Fullstacks Builds Projects',
        'description': 'A set of applications built from the ground up "Frontend & Backend", drawing on my skills in DBMS, backend development and the cloud.',
        'projects': FullStacksAppsProjects,
      },
      {
        'key': '2',
        'title': 'Mobile Apps Projects',
        'description': '+20 mobile frontend (UI-UX) and Front-Backend Complete application projects. These applications are available as downloads for iOS and Android.',
        'projects': MobileAppsProjects,
      },

    ];
    return (
      <div className='app-portfolio-content'>
        <div className='app-portfolio-content__onbording-project'>
          <Slider {...settings}>
            {OnBordingProjectsStruct.map((onbording) => (
              <OnbordingProjectSlider
                key={onbording.key}
                headTitle={onbording.title}
                headDescription={onbording.description}
                projects={onbording.projects}
              />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
