import React, {useContext} from "react";
import "../../../style/StyleRegister/SingInStyle/index.sass"
import  "../../../style/Head/design.sass"
import {MyContext} from "../../../App";




function SignIn(){
    const  {setLogin, setSignIn, setForgotPasswordPage} = useContext(MyContext)

function openPage(){
        setLogin(true)
}

function openRegisterPage(){
     setSignIn(true)
}

function openForgotPasswordPage(){
    console.log(setForgotPasswordPage(true))
}

    return(

        <div className="singIn">
            <div className="logoSignIn">MÖDAIC</div>
            <div className="emailAndPassword">
                <p style={{fontSize: "21px"}}>Sign In</p>
                <p className="nameInput" style={{fontSize:"14px"}}>Email Address</p>
                <input className="emailAddressInput"/>
                <p className="nameInput2" style={{fontSize:"14px"}}>Password</p>
                <input className="passwordInput" type={"password"}/>
                <p className="nameInput3" onClick={openForgotPasswordPage} style={{fontSize:"14px"}}>Forgot Password ?</p>
            </div>
            <button className="signInButton" onClick={openPage} >SIGN IN</button>
            <div id="question">Don't have an account ? <span className="colorStyle" onClick={openRegisterPage}>Sign Up</span></div>
       </div>
    )
}

export default SignIn