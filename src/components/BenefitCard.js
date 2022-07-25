import classes from '../styles/Home.module.css';

const BenefitCard = ({ data: { title, img, iconName, color } }) =>{
    return <div className={classes.benefitcard}>
        <div style={{background: `${color}`}}>
            <i className={`fa fa-${iconName}`} aria-hidden="true" 
                style={{color: 'white', fontSize: '15px', border: '1px solid white', borderRadius: '3px', padding: '2px'}}></i>
            <h5>{title}</h5>
        </div>
        <img src={img} alt={title}/>
    </div>
}

export default BenefitCard;