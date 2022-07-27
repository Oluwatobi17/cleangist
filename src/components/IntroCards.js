import { Link } from 'react-router-dom';

import classes from '../styles/Home.module.css';
import { HowItWorks, UserBenefits, Celebrities, FeathuredMembers } from '../utils/data';
import HowCard from '../components/HowCard';
import BenefitCard from '../components/BenefitCard';
import CelebrityCard from '../components/CelebrityCard';
import FeathuredCard from '../components/FeathuredCard';
import CommunityCard from '../components/CommunityCard';
import GroupCard from '../components/GroupCard';

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
                <div style={{background: "url(./assets/org_bg.jpg)",backgroundSize:'cover', backgroundPosition: 'center'}}>
                    <span className={classes.orgdoing}>Laundry Service</span>
                    <img src='./assets/celeb.webp' alt='Organization'/>
                    <h2>Unlimited Freedom</h2>
                    <p>We love CleanGist because in here, on this platform, you feel untamed 
                        and infinite freedom to express yourself without limitations.<br /><br /> Of 
                        course, the caveat is inasmuch as you stay in line with their flexible 
                        community rules!</p>
                </div>
                <div style={{background: "url(./assets/org_bg.jpg)",backgroundSize:'cover', backgroundPosition: 'center'}}>
                    <span className={classes.orgdoing}>Laundry Service</span>
                    <img src='./assets/celeb.webp' alt='Organization'/>
                    <h2>Unlimited Freedom</h2>
                    <p>We love CleanGist because in here, on this platform, you feel untamed 
                        and infinite freedom to express yourself without limitations.<br /><br /> Of 
                        course, the caveat is inasmuch as you stay in line with their flexible 
                        community rules!</p>
                </div>
                <div style={{background: "url(./assets/org_bg.jpg)",backgroundSize:'cover', backgroundPosition: 'center'}}>
                    <span className={classes.orgdoing}>Laundry Service</span>
                    <img src='./assets/celeb.webp' alt='Organization'/>
                    <h2>Unlimited Freedom</h2>
                    <p>We love CleanGist because in here, on this platform, you feel untamed 
                        and infinite freedom to express yourself without limitations.<br /><br /> Of 
                        course, the caveat is inasmuch as you stay in line with their flexible 
                        community rules!</p>
                </div>
            </div>
        </div>
    </>
}

export default IntroCards;