/* eslint-disable @typescript-eslint/no-unused-vars */
import '../../css/index.css';
import '../../css/Portfolio.css';

export const PortfolioFragment = () => {
  return (
    <div className='app-portfolio-content'>
      <div className='app-portfolio-content__onbording-project'>
        <div className='swiper-wrapper'>
          <section className='swiper-slide'>
            <div className='swiper-slide-header'>
              <h2 data-aos='fade-up'>FrontEnd Projects <span data-aos='fade-down'>+27</span> </h2>
              <div className='row'>
                <p data-aos='fade-left'>
                  Frontend-only projects (UI/UX) using a variety of technologies,
                  highlighting my expertise in the development of modern, fluid user interfaces.
                </p>
                <div className='project-slider-nav'>
                  <div className='p-p-indicator p-p-indic-prev'>
                    <img src='../../src/assets/icons/left-arrow.png' alt='left arrow control' />
                  </div>
                  <div className='p-p-indicator p-p-indic-next'>
                    <img src='../../src/assets/icons/right-arrow.png' alt='right arrow control' />
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide-header__content'>
            </div>
          </section>
        </div>
      </div>
      <div className='app-portfolio-content__pagination'>
        <div className='swiper-pagination'></div>
      </div>
    </div>
  );
}