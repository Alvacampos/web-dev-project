import { Link } from 'react-router-dom';
import GitHubIcon from '../../assets/icons/github-icon.svg';
import LinkedinDark from '../../assets/img/linkedin_dark.png';
import Home from '../../assets/icons/home.svg';
import Paper from '../../assets/icons/paper.svg';
import Folder from '../../assets/icons/folder.svg';
import Education from '../../assets/icons/education.svg';
import Profile from '../../assets/icons/profile.svg';

import './Navbar.scss';

export default function Navbar() {
  const navItems = [
    {
      path: './',
      src: Home,
      alt: 'Home Logo',
      title: 'Home',
      tabindex: '-1',
      location: 'Home',
    },
    {
      path: './skills',
      src: Paper,
      alt: 'CV Logo',
      title: 'CV',
      tabindex: '-1',
      location: 'CV',
    },
    {
      path: './projects',
      src: Folder,
      alt: 'Folder Logo',
      title: 'Projects',
      tabindex: '-1',
      location: 'Projects',
    },
    {
      path: './education',
      src: Education,
      alt: 'Education Logo',
      title: 'Education',
      tabindex: '-1',
      location: 'Education',
    },
    {
      path: './contact',
      src: Profile,
      alt: 'Contact Logo',
      title: 'Contact',
      tabindex: '-1',
      location: 'Contact',
    },
  ];

  return (
    <header>
      <nav className="nav-bar">
        <div>
          <a
            href="https://github.com/Alvacampos"
            className="nav-bar__git-wrapper"
          >
            <img
              tabIndex="-1"
              src={GitHubIcon}
              className="nav-bar__git blob"
              alt="Github Logo"
              title="Gonzalo´s repository"
            />
          </a>
          <ul className="nav-bar__buttons" tabIndex="-1" id="nav-btn">
            {navItems.map((item) => {
              return (
                <li key={item.title} tabIndex={item.tabindex}>
                  <Link to={item.path}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="nav-bar__icon"
                    />
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <img src={LinkedinDark} alt="cv-qr" id="qr-svg" />
      </nav>
    </header>
  );
}
