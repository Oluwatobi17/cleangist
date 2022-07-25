import classes from '../styles/Home.module.css';

const CelebrityCard = ({ data: { name, img, date } }) =>{
    return <div className={classes.celebritycard}>
        <img src={img} alt={name}/>
        <h5>{name}</h5>
        <span>{date}</span>
    </div>
}

export default CelebrityCard;