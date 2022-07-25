import { Link } from 'react-router-dom';

import classes from '../styles/Home.module.css';

const NavBar = () => {
    return <>
        <nav className={classes.navcontainer}>
            <img src="./assets/logo_white.png" alt="Logo"/>

            <div>
                <Link to={'/'} className={classes.links}>
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>HOME</span>
                </Link>
                <Link to={'#'} className={classes.links}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>FRIENDS</span>
                </Link>
                <Link to={'#'} className={classes.links}>
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <span>GROUP</span>
                </Link>
            </div>

            <div>
                <Link to={'/login'} className={classes.links}>
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                    <span>LOGIN</span>
                </Link>
                <Link to={'/login'} className={classes.links}>
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                    <span>SIGN UP</span>
                </Link>
            </div>
        </nav>
    </>
}

export default NavBar;