import React from 'react'
import LoginCss from "./css/Login.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export const Login = () => {
  return (
    <>
        <div className={LoginCss.container}>
            <div className={LoginCss.card}>
                <form className={LoginCss.form} >
                    <a  href="/" className={LoginCss.icon}><FontAwesomeIcon icon={faArrowLeft}/></a>
                    <h2 className={LoginCss.title}>Login</h2>

                    <label className={LoginCss.label} htmlFor="uname"><b>E-mail</b></label>
                    <input className={LoginCss.input} type="email" placeholder="Enter E-mail" name="uname"   required />


                    <label className={LoginCss.label} htmlFor="psw"><b>Password</b></label>
                    <input className={LoginCss.input} type="password" placeholder="Enter Password" name="psw"  required />

                    <label className={LoginCss.errorlabel} id="errorlabel"></label>
                    <button className={LoginCss.btn} type="submit" >Login</button>
                    
                    
                    <div className={LoginCss.switch}>Don't have an account? <a className={LoginCss.a}href="/Signin">Sign up</a></div>
                    
                </form>
            </div>
        </div>



    </>
);
}
