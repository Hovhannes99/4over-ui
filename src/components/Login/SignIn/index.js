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
                <h3>Sign In</h3>
                <p className="nameInput">Email Address</p>
                <input className="emailAddressInput"/>
                <p className="nameInput2">Password</p>
                <input className="passwordInput" type={"password"}/>
                <p className="nameInput3" onClick={openForgotPasswordPage}>Forgot Password ?</p>
            </div>
            <button className="signInButton" onClick={openPage} >SIGN IN</button>
            <div id="question">Don't have an account ? <span className="colorStyle" onClick={openRegisterPage}>Sign Up</span></div>
       </div>
    )
}

export default SignIn