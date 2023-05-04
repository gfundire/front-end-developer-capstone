import React from 'react';
import { Link } from 'react-router-dom';
import links from "../utils/siteLinks";

const Links = () => {  
  return (
    <>
      {links.map((link) => {
        return (
          <li className="nav-item" key={link.name}>
            <Link to={link.path} className="nav-link">
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
export default Links;
