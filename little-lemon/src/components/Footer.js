import './footer.css';
import { Link } from 'react-router-dom';
import links from '../utils/siteLinks';
import Logo from "../images/logo2.png";

const Footer = () => {
  const contacts = ['Address', 'Phone', 'Email'];

  const socials = [
    { name: 'facebook', url: 'https://facebook.com', icon: 'bi bi-facebook' },
    { name: 'twitter', url: 'https://twitter.com', icon: 'bi bi-twitter' },
    { name: 'linkedin', url: 'https://linkedin.com', icon: 'bi bi-linkedin' },
    { name: 'google', url: 'https://google.com', icon: 'bi bi-google' },
  ];
  

  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Link to="/">
              <img 
                className='mt-5'
                src={Logo}
                alt="Little Lemon"
                width="100"
              />
            </Link>
          </div>
          <div className="col-sm-3">
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              {contacts.map((link) => (
                <li key={link}>
                  <Link to="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              {socials.map((social) => (
                <li key={social.name}>
                  <Link to={social.url} target="_blank">
                    <span className="me-2">
                      {<i className={social.icon}></i>}
                    </span>
                    <span>{social.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
