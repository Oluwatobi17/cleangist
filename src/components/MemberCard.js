import classes from '../styles/Home.module.css';

const MemberCard = () =>{
    return  <div style={{background: "url(./assets/team_bg.jpg)",backgroundSize:'cover', backgroundPosition: 'center'}}>
        <img src='./assets/celeb.webp' alt='Organization'/>
        <h2>Charles Okorobo</h2>
        <span className={classes.orgdoing}>Enterpreneur</span>
        <p>We love CleanGist because in here, on this platform, you feel untamed 
            and infinite freedom to express yourself without limitations.Of 
            course, the caveat is inasmuch as you stay in line with their flexible 
            community rules!</p>
    </div>
}

export default MemberCard;