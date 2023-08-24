import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyProfile from '../../assets/images/profile.png';

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

  const navigate = useNavigate();
  const gotToContactFragment = () => {
    navigate('/contact');
  }

  const handleContactProject = () => {
    const email = 'log.franckmekoulou@Outlook.com';
    const emailSubject = 'Talking About New Project';
    const emailBody = 'Hello\n, I\'d like to get more information...\nThank you,';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  }

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
            <button type="button" className="primary-btn" onClick={handleContactProject}>Got a Project?</button>
            <button type="button" className="outlined-btn" onClick={gotToContactFragment}>Let's Talks.</button>
          </div>
          <div className="app-home-page__content-usr-vabout" data-aos="fade-up">
            <h3><span>+</span>113 Projects</h3>
            <h3><span>+</span>4 Year exps.</h3>
          </div>
        </div>
        <div className="app-main-content__profile-view" data-aos="fade-left">
          <div className="app-main-content__profile-view-card">
            <div className="app-main-content__profile-view-profile" style={{backgroundImage: `url('${MyProfile}')`}}></div>
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