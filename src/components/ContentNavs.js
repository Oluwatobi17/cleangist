import { useEffect } from "react";
import classes from "../styles/Join.module.css";

const ContentNavs = ({ changeFilter }) =>{
    useEffect(()=>{
        document.getElementById('login')?.classList.add('active');
    }, []);

    const handleFilter = (id) =>{
        const filters = document.querySelectorAll('.filter');
        Object.values(filters).map(link => link.classList?.remove('active'));
        document.querySelector('#'+id).classList?.add('active');
        // setSelectedFilter(by);
        changeFilter(id);
    }

    return <div className={classes.navs}>
        <div className="filter" onClick={()=>handleFilter('login')} id='login'>Login</div>
        <div className="filter" onClick={()=>handleFilter('social')} id='social'>Social Login</div>
        <div className="filter" onClick={()=>handleFilter('signup')} id='signup'>Sign up</div>
    </div>
}

export default ContentNavs