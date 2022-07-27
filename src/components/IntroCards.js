import { Link } from 'react-router-dom';

import classes from '../styles/Home.module.css';
import { HowItWorks, UserBenefits, Celebrities, FeathuredMembers, Subcriptions } from '../utils/data';
import HowCard from '../components/HowCard';
import BenefitCard from '../components/BenefitCard';
import CelebrityCard from '../components/CelebrityCard';
import FeathuredCard from '../components/FeathuredCard';
import CommunityCard from '../components/CommunityCard';
import GroupCard from '../components/GroupCard';
import OrgCard from '../components/OrgCard';
import MemberCard from '../components/MemberCard';
import SubscriptionCard from '../components/SubscriptionCard';
import MapCard from '../components/MapCard';

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

        <CommunityCard />

        <div className={classes.card}>
            <div className={classes.title}>
                <i className="fa fa-users" aria-hidden="true"></i>
                <h1>Life Changing Groups</h1>
                <p className={classes.subtitle}>Join a group(s) that adds Life Changing and Enduring Value to your Life</p>
                <div>
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                </div>
            </div>
        </div>

        <div className={classes.cardflex}>
            <img src='./assets/people.png' alt='what people say '/>
            <div className={classes.side2}>
                <h1>Hear what people say</h1>
                <img src='./assets/story.png' alt='what people say '/>
            </div>
        </div>
        <div className={classes.card} style={{background: "url(./assets/homebg.jpg)"}}>
            <center> <h1 className={classes.white}>Hear what Organizations say</h1> </center>
            <div className={classes.orgcard}>
                <OrgCard />
                <OrgCard />
                <OrgCard />
            </div>
        </div>
        <div className={classes.card} style={{background: "url(./assets/homebg.jpg)"}}>
            <center> <h1 className={classes.white}>Our Team Members</h1> </center>
            <div className={classes.membercard}>
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
        </div>
        <div className={classes.card} style={{background: "url(./assets/homebg.jpg)"}}>
            <center> <h1 className={classes.white}>Subscription Packages</h1> </center>
            <div className={classes.subcriptioncard}>
                <SubscriptionCard benifits={Subcriptions[0]} panelcolor='#272525' titlecolor='#fff' tagcolor='#6f6e6e' pricecolor='#fff' title='Starter' price='#0/Month' tag='Beginner' />
                <SubscriptionCard benifits={Subcriptions[1]} panelcolor='#002635' titlecolor='#fff' tagcolor='#fff' pricecolor='lime' title='Standard' tag='Basic' price='#1000/Month'/>
                <SubscriptionCard benifits={Subcriptions[2]} panelcolor='#cc0045' titlecolor='#ffd700' tagcolor='#ff0090' pricecolor='#fff' title='Climber' tag='Zenith' price='#2700/Month'/>
                <SubscriptionCard benifits={Subcriptions[3]} panelcolor='#ff6000' titlecolor='#ffd700' tagcolor='#ffb000' pricecolor='#fff' title='Elite' tag='Influence' price='#4800/Month'/>
                <SubscriptionCard benifits={Subcriptions[4]} panelcolor='#ffd700' titlecolor='#fff' tagcolor='#fff' pricecolor='#000' title='Prestige' tag='Royal' price='#8400/Month'/>
            </div>
        </div>

        <MapCard />
    </>
}

export default IntroCards;