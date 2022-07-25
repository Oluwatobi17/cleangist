import { Link } from 'react-router-dom';

import classes from '../styles/Home.module.css';

const FeathuredCard = ({ data: { name, img, link } }) =>{
    return <div className={classes.feathuredcard} 
        style={{background: "url(./assets/feathurBG.jpg)", backgroundSize: 'contain'}}>

        <img src={img} alt={name}/>
        <h5>{name}</h5>
        <Link to='#'>{link}</Link>
    </div>
}

export default FeathuredCard;