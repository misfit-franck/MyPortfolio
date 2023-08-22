/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "../../css/index.css";
import "../../css/Portfolio.css";
import { OnbordingProjectSlider } from "../../components/OnbordingProjectSlider.jsx";
import {
  FrontEndProjects,
  MobileAppsProjects,
  FullStacksAppsProjects,
} from "../../projects.ts";

const OnBordingProjectsStruct = [
  {
    key: "0",
    title: "Frontend Projects",
    description:
      "Frontend-only projects (UI/UX) using a variety of technologies,highlighting my expertise in the development of modern, fluid user interfaces.",
    projects: FrontEndProjects,
    moreProjectCount: 17
  },
  {
    key: "1",
    title: "Fullstacks Builds Projects",
    description:
      'A set of applications built from the ground up "Frontend & Backend", drawing on my skills in DBMS, backend development and the cloud.',
    projects: FullStacksAppsProjects,
    moreProjectCount: 11
  },
  {
    key: "2",
    title: "Mobile Apps Projects",
    description:
      "+20 mobile frontend and Front-Backend Complete application projects. Available as downloads",
    projects: MobileAppsProjects,
    moreProjectCount: 22

  },
];

export const PortfolioFragment = () => {
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
  return (
    <div className="app-portfolio-content">
      <div className="app-portfolio-content__onbording-project">
        <Slider {...settings}>
          {OnBordingProjectsStruct.map((onbording) => (
            <OnbordingProjectSlider
              key={onbording.key}
              headTitle={onbording.title}
              headDescription={onbording.description}
              projects={onbording.projects}
              moreProjectCount={onbording.moreProjectCount}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
