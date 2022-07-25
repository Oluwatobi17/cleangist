import { useState } from "react";
import { Link } from "react-router-dom";

import ContentNavs from "../components/ContentNavs";
import JoinIntro from "../components/JoinIntro";
import Login from "../components/Login";
import Signup from "../components/Signup";
import SocialLogin from "../components/SocialLogin";
import classes from "../styles/Join.module.css";

const Join = () =>{
    const [filter, setFilter] = useState('login');

    const handleFilterChange = (id) =>{
        setFilter(id);
    }

    return <main className="body" style={{backgroundImage: "url('./assets/bg.jpg')"}}>
        <Link to='/'>
            <img src="./assets/logo.png" className={classes.logo} alt="Clean Gist Logo" />
        </Link>

        <div className={classes.container}>
            <h1>Connect with your family and friends and get rewarded.</h1>

            <div className={classes.connect}>
                <img src="./assets/connect.png" alt="Connect" />
            </div>

            <div className={classes.content}>
                <ContentNavs changeFilter={handleFilterChange} />

                {filter==='login' && <Login />}
                {filter==='social' && <SocialLogin />}
                {filter==='signup' && <Signup />}
            </div>

            <JoinIntro />
        </div>

        <span className={classes.site}>CleanGist.com</span>
    </main>
}

export default Join;