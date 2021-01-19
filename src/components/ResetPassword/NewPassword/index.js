import React, {useContext} from "react";
import "../../../style/StyleRegister/SingInStyle/index.sass"
import {MyContext} from "../../../App";




function NewPassword(){
    const {setForgotPasswordPage, setLogin} = useContext(MyContext)

    function openCampaingsPage(){
        setLogin(true)
    }
    function openSignInPage(){
        setForgotPasswordPage(false)
        console.log(144)
    }
    return(
        <div className="singIn">
            <div className="logoSignIn">MÖDAIC</div>
            <div className="ResetPassword">
                <p style={{fontSize: "21px"}}>Reset Password</p>
                <p className="nameInput2" style={{fontSize:"14px"}}>New Password</p>
                <input className="passwordInput" type={"password"}/>
                <p className="nameInput3" style={{fontSize:"14px"}}>Repeat Password</p>
                <input className="passwordInput" type={"password"}/>
            </div>
            <button className="resetButton" onClick={openCampaingsPage} >RESET</button>
            <div id="goBack2">Go back to <span className="colorStyle" onClick={openSignInPage}>Sign In</span>  </div>
        </div>
    )

}


export default NewPassword