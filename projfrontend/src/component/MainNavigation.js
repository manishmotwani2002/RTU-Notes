//import classes from "*.module.css";
import { Fragment, useEffect, useState } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../middlewares/authMiddleware";
import classes from "./MainNavigation.module.css";
import { useHistory } from "react-router-dom";

const MainNavigation = () => {
  const [help, setHelp] = useState(false);
  const user = localStorage.getItem("user");
  const role = localStorage.getItem("role");
  const history = useHistory();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>RTU TOAD</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/">
              Home
            </NavLink>
          </li>
          {!isAuthenticated() && (
            <Fragment>
              <li>
                <NavLink activeClassName={classes.active} to="/signup">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/signin">
                  Signin
                </NavLink>
              </li>
            </Fragment>
          )}
          {isAuthenticated() && role == 0 && (
            <li>
              <Link to={`/profile/${user}`}>Profile</Link>
            </li>
          )}
          {isAuthenticated() && role == 1 && (
            <li>
              <Link to={`/adminprofile/${user}`}>Admin Profile</Link>
            </li>
          )}
          {isAuthenticated() && (
            <li>
              <Link onClick={() => signout()} to="/">
                Signout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(MainNavigation);
