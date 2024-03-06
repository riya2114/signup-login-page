import React, { useState } from 'react';
import styles from './Login.module.css';
import LockIcon from '@mui/icons-material/Lock';
import { Email } from '@mui/icons-material';
import { Visibility } from '@mui/icons-material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { colors } from '@mui/material';

const Login = () => {
    const [offVisibility,setOffVisibility] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate= useNavigate();
    const handleClick = () => {
        navigate("/Signup");
    };
    const handleButton=(e)=>{
       e.preventDefault();
       console.log(email,password);
       setEmail("");
       setPassword("");
       const container=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
       if(!container.test(password)){
        alert("Please enter a valid password")
        return;
       }
    }
  return (
    <>
        <form className={styles.container} onSubmit={handleButton}>
            <h1>Login</h1>
            <div className={styles.inputBoxes}>
               <div className={styles.emailPassword}>
                   <Email className={styles.icon}/>
                   <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email...' />
                </div>
                <div className={styles.emailPassword}>
                    <LockIcon className={styles.icon}/>
                    <input type={offVisibility?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)}
                    placeholder='enter your password...' />
                    {offVisibility ? (
                        <Visibility className={styles.eyes} 
                        onClick={()=>setOffVisibility(!offVisibility)}/>
                        ) : (<VisibilityOffIcon className={styles.eyes} 
                        onClick={()=>setOffVisibility(!offVisibility)}/>
                    )}
                </div>
                <div className={styles.button}>
                    <button type='submit'>Login</button>
                </div>
            </div>
            <div className={styles.account}>
                <p>Don't have an account!</p>
                <button onClick={handleClick}>Signup</button>
            </div>
        </form>
    </>
  )
}

export default Login;