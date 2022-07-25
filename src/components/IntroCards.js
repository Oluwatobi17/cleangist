import { Link } from 'react-router-dom';

import classes from '../styles/Home.module.css';
import { HowItWorks, UserBenefits, Celebrities, FeathuredMembers } from '../utils/data';
import HowCard from '../components/HowCard';
import BenefitCard from '../components/BenefitCard';
import CelebrityCard from '../components/CelebrityCard';
import FeathuredCard from '../components/FeathuredCard';


const IntroCards = () =>{
    return <>
        <div className={classes.card}>
            <div className={classes.title}>
                <h1><span className={classes.box}>.</span> How it works</h1>
                <div>
                    {HowItWorks.map(item => <HowCard key={item.title} data={item}/>)}
                </div>
                <Link to='/login' className={classes.joinLink}>Join Now</Link>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.title}>
                <h1><span className={classes.box}>.</span> User Benefits</h1>
                <div>
                    {UserBenefits.map(item => <BenefitCard key={item.title} data={item}/>)}
                </div>
                <Link to='/login' className={classes.joinLink}>Join Now</Link>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.title}>
                <h1><span className={classes.box}>.</span> Our Celebrities</h1>
                <div>
                    {Celebrities.map(item => <CelebrityCard key={item.name} data={item}/>)}
                </div>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.title}>
                <h1><span className={classes.box}>.</span> Our Feathered Members</h1>
                <div>
                    {FeathuredMembers.map(item => <FeathuredCard key={item.name} data={item}/>)}
                </div>
                <Link to='/login' className={classes.joinLink}>Join Now</Link>
            </div>
        </div>
    </>
}

export default IntroCards;