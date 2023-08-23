import { Outlet ,Link } from 'react-router-dom';
import '../css/Responsive.css';
import SVGMenu from '../assets/menu.svg';
console.info(SVGMenu);

const HomePage = () => {
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
                <li><Link to={'/contact'} className='link translate' data-key='contact_link'>Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className='app-header__space-content'></div>
          <div className='app-header__right-content'>
            <div className='app-header__right-content-menu-icon lang-icon'>
              <h4 className='lang'>Fr.</h4>
            </div>
            <div className='app-header__right-content-menu-icon menu-icon'>
              <img src={SVGMenu} alt='menu' className='m-icon' />
            </div>
          </div>
        </header>
      </div>
      <Outlet />
    </main>
  );
}

export default HomePage;