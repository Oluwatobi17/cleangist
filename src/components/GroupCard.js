import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.css';

const GroupCard = () =>{
    return <div className={classes.groupcard}>
        <img src='./assets/headset.jpg' alt='Life Changing groups' />
        <div>
            <h3>Music</h3>
            <span>
                <i className="fa fa-info" aria-hidden="true"></i>
                Public Group
            </span>
            <div>
                <img src='./assets/celeb.webp' alt='Creator'/>
                <div>
                    <span>Created by</span>
                    <Link to='#'>Clean Gist</Link>
                </div>
            </div>
        </div>
    </div>
}

export default GroupCard;