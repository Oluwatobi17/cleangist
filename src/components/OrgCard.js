import classes from '../styles/Home.module.css';

const OrgCard = () =>{
    return  <div style={{background: "url(./assets/org_bg.jpg)",backgroundSize:'cover', backgroundPosition: 'center'}}>
        <span className={classes.orgdoing}>Laundry Service</span>
        <img src='./assets/celeb.webp' alt='Organization'/>
        <h2>Unlimited Freedom</h2>
        <p>We love CleanGist because in here, on this platform, you feel untamed 
            and infinite freedom to express yourself without limitations.<br /><br /> Of 
            course, the caveat is inasmuch as you stay in line with their flexible 
            community rules!</p>
    </div>
}

export default OrgCard;