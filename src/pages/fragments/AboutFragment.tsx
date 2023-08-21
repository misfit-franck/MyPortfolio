import '../../css/index.css';
import '../../css/About.css';

export const AboutFragment = () => {
  return (
    <div className='app-about-content'>
      <div className='app-about-content__profile-view' data-aos='zoom-in'>
        <div className='app-about-content__profile-view-card'>
          <div className='app-main-content__profile-view-profile' id='abt'></div>
        </div>
      </div>
      <div className='app-about-content__description'>
        <div className='app-about-content-container'>
          <h2 data-aos='fade-left' id='abs'>About Me</h2>
          <h1 data-aos='fade-right'>Franck Mekoulou</h1>
          <p>
            Passionate developer with 3 years' experience in C++ development.
            Over the years, I've broadened my expertise to include mobile
            development with Flutter, enabling me to create innovative,
            user-friendly applications. <br /> <br />

            My career path has also led me to explore the exciting world of
            frontend development, working with React and VueJS technologies.
            These recent experiences have enabled me to hone my skills as a
            frontend developer and create interactive, responsive user
            interfaces. <br /> <br />

            As a developer, I focus on code quality, efficiency and
            maintainability. I'm always on the lookout for best development
            practices to ensure the sustainability of the projects I work on. <br /> <br />

            I'm a great believer in team collaboration and communication, as
            this is the key to project success. My approach is
            solution-oriented, and I'm always ready to take on new challenges
            to keep progressing as a developer. <br /> <br />

            I'm constantly looking for opportunities that allow me to grow as
            a professional and contribute to stimulating and innovative
            projects. If you're looking for a passionate and dedicated
            developer for your team, don't hesitate to contact me!
          </p>
          <div className='flex-center'>
            <button type='button' className='primary-btn'>Download My cv</button>
            <button type="button" className='outlined-btn'>
              See Portfolio
            </button>
          </div>
        </div>
        <h3 id='adji'>Track Me As Your Want</h3>
        <div className='flex-center' id='p-social'>
          <div>
            <a href='https://www.linkedin.com/in/franck-mekoulou/' target='_blank' rel='noopener'>
              <img src='./src/assets/icons/linkedln.png' alt='Linkedln' title='Get My Linkedln Activity'/>
            </a>
          </div>
          <div>
            <a href='https://www.facebook.com/profile.php?id=100091249239627' target='_blank' rel='noopener'>
              <img src='./src/assets/icons/facebook.png' alt='Facebook' title='My Posts, My Pages, My Contribution on these Groups'/>
            </a>
          </div>
          <div>
            <a href='https://twitter.com/FMekoulou01001' target='_blank' rel='noopener'>
              <img src='./src/assets/icons/twitter.png' alt='Twitter' title='Maybe My Tweets? See here'/>
            </a>
          </div>
          <div>
            <a href='https://github.com/misfit-franck' target='_blank' rel='noopener'>
              <img src='./src/assets/icons/github.png' alt='Github' title='Access To My Amazing Built Project Using Github'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}