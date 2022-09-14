import { Link, useLocation } from "react-router-dom";

import classes from "./NavBar.module.css";

const NavBar = ({ title, views }) => {
  const location = useLocation();

  return (
    <nav className={classes.nav}>
      <h1>
        <a>{title}</a>
      </h1>
      <ul>
        {views.map(
          (view) =>
            view.show && (
              <li key={view.name}>
                <Link to={view.path} className={location.pathname === view.path ? classes.isActive : ""}>
                  {view.name.toUpperCase()}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
