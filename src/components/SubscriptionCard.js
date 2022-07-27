import classes from '../styles/Home.module.css';

const SubscriptionCard = ({benifits, panelcolor, titlecolor, tagcolor, pricecolor, title, tag, price }) =>{
    
    return  <div>
        <div style={{background: panelcolor}}>
            <h3 style={{color: titlecolor}}>{title}</h3>
            <p style={{color: pricecolor}}>{price}</p>
            <span className={classes.orgdoing} style={{background: tagcolor, color: pricecolor}}>{tag}</span>
        </div>

        <ul>
            {benifits.map(benifit => <li style={{listStyleImage: "url(./assets/icon-yes.svg)"}}>{benifit}</li>)}
        </ul>
    </div>
}

export default SubscriptionCard;