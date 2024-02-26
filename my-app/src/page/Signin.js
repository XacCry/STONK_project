import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import RegisterCss from "./css/Login.module.css"
export const Signin = () => {
  return (
    <>
        <div className={RegisterCss.container}>
            <div className={RegisterCss.card}>
                <form className={RegisterCss.form} onSubmit={Signin}>
                <a  href="/" className={RegisterCss.icon}><FontAwesomeIcon icon={faArrowLeft}/></a>
                    <h2 className={RegisterCss.title}>Sign up</h2>
                    <label className={RegisterCss.label}><b>E-mail</b></label>
                    <input className={RegisterCss.input} type="email" placeholder="Enter E-mail" name="uname" required />

                    <label className={RegisterCss.label}><b>Password</b></label>
                    <input className={RegisterCss.input} type="password" placeholder="Enter Password" name="psw"   required />

                    <label className={RegisterCss.label}><b>Port Number</b></label>
                    <input className={RegisterCss.input} type="PortNumber" placeholder="Enter Port" name="prt"   required />

                    <label className={RegisterCss.label}><b>Full Name</b></label>
                    <input className={RegisterCss.input} pattern="[/w/s]{2,50}" type="text" placeholder="Enter your Fullname" name="name"   required />

                    <label className={RegisterCss.label}><b>Phone Number</b></label>
                    <input className={RegisterCss.input}  type="tel" pattern="^0{1}[6-9]{1}[0-9]{8}" placeholder="Enter Phone Number" name="phone"  required />

                    <label className={RegisterCss.errorlabel} id="errorlabel"></label>
                    <button className={RegisterCss.btn} type="submit">Sign up</button>

                    <div  className={RegisterCss.switch}>Have account already? <a className={RegisterCss.a} href="/Login">Login</a></div>

                </form>
            </div>
        </div>
    </>
    
)
}
export default Signin;
