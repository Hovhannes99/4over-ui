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
                <h3>Reset Password</h3>
                <p className="nameInput2">New Password</p>
                <input className="passwordInput" type={"password"}/>
                <p className="nameInput3">Repeat Password</p>
                <input className="passwordInput" type={"password"}/>
            </div>
            <button className="resetButton" onClick={openCampaingsPage} >RESET</button>
            <div id="goBack2">Go back to <span className="colorStyle" onClick={openSignInPage}>Sign In</span>  </div>
        </div>
    )

}


export default NewPassword