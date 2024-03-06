import React, { useState } from 'react';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';
import { Visibility } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';

const Signup = () => {
  const [visibilityOff, setVisibilityOff] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleButton = (e)=>{
    e.preventDefault();
    console.log(name,email,confirmPassword);
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
    const container=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
    if(!container.test(password)){
      alert("Please enter a valid password")
      return;
    }
    if(!container.test(confirm)){
      alert("Please enter a valid password")
      return;
    }
    if(password!== confirm){
      alert("Passwords do not match")
      return;
    }
  };
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/");
  }
  return (
    <>
      <form onSubmit={handleButton} className={styles.mainContainer}>
        <h1>Signup</h1>
        <div className={styles.signUpInput}>
          <div className={styles.inputBox}>
            <PersonOutlineIcon className={styles.icon}/>
            <input type='text' value={name} 
            onChange={(e)=>setName(e.target.value)} 
            placeholder='enter your name...' required/>
          </div>
          <div className={styles.inputBox}>
            <Email className={styles.icon}/>
            <input type='email' value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            placeholder='enter your email...' required/>
          </div>
          <div className={styles.inputBox}>
            <LockIcon className={styles.icon}/>
            <input type={visibilityOff?"text":"password"} 
            value={password} onChange={(e)=>setPassword(e.target.value)} 
            placeholder='enter your password...' required/>
            {visibilityOff? (<Visibility className={styles.eyes}
             onClick={()=>setVisibilityOff(!visibilityOff)}/>)
            : (<VisibilityOffIcon className={styles.eyes} 
            onClick={()=>setVisibilityOff(!visibilityOff)}/>)}
          </div>
          <div className={styles.inputBox}>
            <LockIcon className={styles.icon}/>
            <input type={confirmPassword?"text":"password"} 
            value={confirm} onChange={(e)=>setConfirm(e.target.value)} 
            placeholder='enter your confirm password...' required/>
            {confirmPassword? (<Visibility className={styles.eye} 
            onClick={()=>setConfirmPassword(!confirmPassword)}/>)
            :(<VisibilityOffIcon className={styles.eye} 
            onClick={()=>setConfirmPassword(!confirmPassword)}/>)}
          </div>
          <div className={styles.button}>
            <button type='submit'>Signup</button>
          </div>
        </div>
        <div className={styles.account}>
          <p>Already have an account!</p>
          <button onClick={handleClick}>Login</button>
        </div>
      </form>
    </>
  )
}

export default Signup;