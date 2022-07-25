import classes from "../styles/Join.module.css";

const Signup = () =>{
    return <div className={classes.login}>
        <div>
            <input type='text' placeholder='Username' />
            
        </div>
        <div>
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirm Password' />
        </div>
        <div>
            <input type='date' placeholder='Birthday' />
        </div>
        
        <div>
            <div>
                <input type='checkbox'/>
                <label>By clicking sign up, you've agreed to our <a href="#" target='_blank'>
                    terms of service and private policy</a> </label>
            </div>
        </div>
        <div>
            <input type='submit' value='Sign Up' />
        </div>
    </div>
}

export default Signup;