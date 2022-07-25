import classes from '../styles/Home.module.css';

const BannerIntro = () => {
    return <div className={classes.banner} style={{background: "url(./assets/bg.jpg)"}}>
        <div>
            <span>Clean Gist </span>
            Social Network
        </div>
        <p>
        We are a Social Network which celebrates people for the <br/> Achievements and Contributions
         they make to life.
        </p>
        <p>
        We are all about celebrating Humanity because we have a <br/> superb self confidence in our
         shared humanity.
        </p>
    </div>
}

export default BannerIntro;