import classes from "../styles/Join.module.css";

const Login = () =>{
    return <div className={classes.login}>
        <div>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <input type='submit' value='Login' />
        </div>
        <div>
            <div>
                <input type='checkbox'/>
                <label>Remember me</label>
            </div>

            <a>Forgot Password</a>
        </div>
    </div>
}

export default Login;