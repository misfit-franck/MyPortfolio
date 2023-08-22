import { useEffect, useRef } from "react";

const HomeFragment = () => {
  let winXDimens: number = 0, winYDimens: number = 0;
  const myNameHeadingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    winXDimens = window.innerWidth;
    winYDimens = window.innerHeight;
  },[]);

  window.addEventListener('resize', () => {
    winXDimens = window.innerWidth;
    if (winXDimens <= 918) {
      console.warn('Contact ~ Break Design Value Detected.');
      myNameHeadingRef.current!.textContent = 'I\'m Franck Mekoulou.';
    }
  });
  console.info(`X: ${winXDimens} | Y: ${winYDimens}`);
  return (
    <div className="app-main-content">
      <div className="row">
        <div className="app-main-content__description">
          <h3 data-aos="fade-up">Welcome 🫡</h3>
          <h1 data-aos="fade-up" ref={myNameHeadingRef}>I'm Franck {<br></br>}&nbsp; Mekoulou.</h1>
          <span data-aos="fade-right">The Happy code 🥳</span>
          <p className="app-main-content__description-p" data-aos="fade-up">
            Versatile developer passionate about creating mobile, web, and system applications.
            Junior in Flutter for cross-platform application development, experienced in System C++ development and
            specialized in web frontend development.
          </p>
          <p className="app-home-page__content-description-social-reference" data-aos="fade-up">
            INSTAGRAM / FACEBOOK / TWITTER / GITHUB
          </p>
          <div className="app-home-page__content-action" data-aos="zoom-out">
            <button type="button" className="primary-btn">Got a Project?</button>
            <button type="button" className="outlined-btn">Let's Talks.</button>
          </div>
          <div className="app-home-page__content-usr-vabout" data-aos="fade-up">
            <h3><span>+</span>113 Projects</h3>
            <h3><span>+</span>4 Year exps.</h3>
          </div>
        </div>
        <div className="app-main-content__profile-view" data-aos="fade-left">
          <div className="app-main-content__profile-view-card">
            <div className="app-main-content__profile-view-profile"></div>
          </div>
        </div>
      </div>
      <section className="app-banner">
        <div><h3><span>D</span>esign</h3></div>
        <div><h3><span>B</span>randing</h3></div>
        <div><h3><span>D</span>evelopment</h3></div>
        <div><h3><span>S</span>trategy</h3></div>
        <div><h3><span>P</span>roduct design</h3></div>
        <div><h3><span>M</span>otion</h3></div>
      </section>
    </div>
  );
}

export default HomeFragment;