import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.css';

const MapCard = () =>{
    return <div className={classes.mapcard} 
        style={{background: "url(./assets/map_bg.webp)", backgroundSize:'contain'}}>
        <h2>Don't wait, build your connections today!</h2>

        <Link to='/login'>
            <i className={`fa fa-user`} aria-hidden="true"></i>
            Get Started Now
        </Link>
    </div>
}

export default MapCard;