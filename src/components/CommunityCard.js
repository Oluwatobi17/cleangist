import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.css';

const CommunityCard = () =>{
    return <div className={classes.community}>
        <div className={classes.similar} style={{background: "url(./assets/smoke.jpg)"}}>
            <h3>Meet People with</h3>
            <h1>Similar <span>Interests</span></h1>

            <Link to='/login'>
                <i class="fa fa-users" aria-hidden="true"></i>
                Join Community Now
            </Link>
        </div>

        <img src='./assets/cannival.webp' alt='Celebration' />
    </div>
}

export default CommunityCard;