import classes from "../styles/Join.module.css";

const JoinIntro = () =>{
    return <div className={classes.base}>
        <h2>At CleanGist, You:</h2>
        <div>
            <div>
                <img src="./assets/1 two-friends.svg" alt="Friends"/>
                <p>Make Friends</p>
            </div>
            <div>
                <img src="./assets/3 chat with 3 dots.svg" alt="Friends"/>
                <p>Speak Your Mind</p>
            </div>
            <div>
                <img src="./assets/4 three(3) People Group.svg" alt="Friends"/>
                <p>Build Community</p>
            </div>
            <div>
                <img src="./assets/5 coins-svgrepo-com.svg" alt="Friends"/>
                <p>Earn Points</p>
            </div>
        </div>
    </div>
}

export default JoinIntro;