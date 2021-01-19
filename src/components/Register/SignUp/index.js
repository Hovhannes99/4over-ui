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
                <p style={{fontSize: "21px"}}>Sign Up</p>
                <p className="nameInput" style={{fontSize:"14px"}}>Email Address</p>
                <input className="emailAddressInput"/>
                <p className="nameInput2" style={{fontSize:"14px"}}>Password</p>
                <input className="passwordInput" type={"password"}/>
                <p className="nameInput3" style={{fontSize:"14px" , marginTop:"3%"}}>Repeat Password</p>
                <input className="passwordInput" type={"password"}/>
            </div>
            <button className="signUpButton" >SIGN UP</button>
            <div id="question2">Have an account? <span className="colorStyle" onClick={openSignInPage}>Sign In</span></div>
        </div>
    )

}


export default SignUp