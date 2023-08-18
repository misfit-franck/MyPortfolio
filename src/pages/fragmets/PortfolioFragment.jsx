/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import '../../css/index.css';
import '../../css/Portfolio.css';
import { OnbordingProjectSlider }  from '../../components/OnbordingProjectSlider';

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
    return (
      <div className='app-portfolio-content'>
        <div className='app-portfolio-content__onbording-project'>
          <Slider {...settings}>
            <OnbordingProjectSlider headTitle={'Frontend Projects'} />
            {/* <OnbordingProjectSlider headTitle={'Mobile Apps Projects'} />
            <OnbordingProjectSlider headTitle={'Apps Projects'} /> */}
          </Slider>
        </div>
      </div>
    );
  }
}
