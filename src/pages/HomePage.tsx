import { Outlet ,Link, NavLink } from 'react-router-dom';
import '../css/Responsive.css';
import '../css/Modal.css';
import SVGMenu from '../assets/menu.svg';
import SGVDownload from '../assets/download.svg';
import { useState } from 'react';

const HomePage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <main id='app'>
      <div>
        <header className='app-header'>
          <div className='app-header__left-content'>
            <div id='logo' data-aos='fade-up' onClick={reloadPage}>f.</div>
            <nav className='app-header-nav'>
              <ul className='flex-center'>
                <li><Link to={'/'} className='link translate active' data-key='home_link'>Home Page</Link> </li>
                <li><Link to={'/about'} className='link translate' data-key='about_link'>About Me</Link></li>
                <li><Link to={'/portfolio'} className='link translate' data-key='portfolio_link'>Portfolio</Link></li>
                <li><Link to={'/services'} className='link translate' data-key='portfolio_link'>Services</Link></li>
                <li><Link to={'/contact'} className='link translate' data-key='contact_link'>Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className='app-header__space-content'></div>
          <div className='app-header__right-content'>
            <div className='app-header__right-content-menu-icon lang-icon'>
              <h4 className='lang'>Fr.</h4>
            </div>
            <div className='app-header__right-content-menu-icon menu-icon' onClick={toggleModal}>
              <img src={SVGMenu} alt='menu' className='m-icon' />
            </div>
          </div>
        </header>
      </div>
      {
        modal && (
          <div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content'>
              <h2 id='menu-title'>Menu</h2>
              <ul className='overview-menu'>
                <li><NavLink to={'/'} onClick={toggleModal}>Home Page</NavLink></li>
                <li><NavLink to={'/about'} onClick={toggleModal}>About Me</NavLink></li>
                <li><NavLink to={'/portfolio'} onClick={toggleModal}>Portfolio</NavLink></li>
                <li><NavLink to={'/services'} onClick={toggleModal}>Services</NavLink></li>
                <li><NavLink to={'/contact'} onClick={toggleModal}>Contact</NavLink></li>
              </ul>
              <div className="utiliy-information">
                <div className="utility-information-box">
                  <div className="left-content">
                    <h3>Get My References</h3>
                    <p>You can download a low file to get my references</p>
                  </div>
                  <button type='button' className='outlined-btn'><img src={SGVDownload} alt='download icons'/>Download</button>
                </div>
                <div className="utility-information-box">
                  <div className="left-content">
                    <h3>Tips</h3>
                    <p><strong>Please use Firefox for good web experience</strong></p>
                  </div>
                </div>
              </div>
              <button className='modal-close' onClick={toggleModal}>Close</button>
            </div>
          </div>
        )
      }
      <Outlet />
    </main>
  );
}

export default HomePage;