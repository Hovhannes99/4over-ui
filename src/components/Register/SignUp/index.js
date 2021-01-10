import React, {useContext} from "react";
import "../../../style/StyleRegister/SingInStyle/index.sass"
import {MyContext} from "../../../App";





function SignUp(){

    const {setSignIn}= useContext(MyContext)

    function openSignInPage(){
        setSignIn(false)
    }


    return(
        <div className="singIn">
            <div className="logoSignIn">MÖDAIC</div>
            <div className="emailAndPassword">
                <h3>Sign Up</h3>
                <p className="nameInput">Email Address</p>
                <input className="emailAddressInput"/>
                <p className="nameInput2">Password</p>
                <input className="passwordInput" type={"password"}/>
                <p className="nameInput3">Repeat Password</p>
                <input className="passwordInput" type={"password"}/>
            </div>
            <button className="signUpButton" >SIGN UP</button>
            <div id="question2">Have an account? <span className="colorStyle" onClick={openSignInPage}>Sign In</span></div>
        </div>
    )

}


export default SignUp