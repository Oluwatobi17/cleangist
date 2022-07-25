import classes from "../styles/Join.module.css";

const SocialLogin = () =>{
    return <div className={classes.sociallogin}>
        <div style={{color: 'white', backgroundColor: '#061fff'}}>
            <img src="./assets/facebook.png" alt="social"/>
            Facebook
        </div>
        <div style={{color: 'black', backgroundColor: '#6a9bf7'}}>
            <img src="./assets/twitter.png" alt="social"/>
            Twitter
        </div>
        <div style={{color: 'white', backgroundColor: '#690f04'}}>
            <img src="./assets/instagram.png" alt="social"/>
            Instagram
        </div>
        <div style={{color: 'black', backgroundColor: '#6a9bf7'}}>
            <img src="./assets/linkedin.png" alt="social"/>
            LinkedIn
        </div>
    </div>
}

export default SocialLogin;