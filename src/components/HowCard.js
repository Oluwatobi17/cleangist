import classes from '../styles/Home.module.css';

const HowCard = ({ data: { title, body, iconName, color } }) =>{
    return <div className={classes.howcard}>
        <i className={`fa fa-${iconName}`} aria-hidden="true" 
            style={{color, fontSize: '2.2em', border: `1px solid ${color}`, borderRadius: '8px', padding: '10px'}}></i>
        <h5 style={{color}}>{title}</h5>
        <p>{body}</p>
    </div>
}

export default HowCard;