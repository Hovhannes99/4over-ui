import React, {useContext} from "react";
import "../../../style/StyleRegister/SingInStyle/index.sass"
import {MyContext} from "../../../App";






function EmailAddres(){
    const {setResetPassword, setForgotPasswordPage} = useContext(MyContext)
    function openResetPasswordPage(){
        setResetPassword(true)
    }
    function openSignInPage(){
        setForgotPasswordPage(false)
    }

    return(
        <div className="singIn">
            <div className="logoSignIn">MÖDAIC</div>
            <div className="ResetPassword">
                <h3>Reset Password</h3>
                <p className="nameInput">Email Address</p>
                <input className="emailAddressInput"/>
            </div>
            <button className="sendButton" onClick={openResetPasswordPage}>SEND</button>
            <h5 style={{color:"#989898"}}>Didn't receive ? You can send again in <span style={{color:"black"}}>01:59</span></h5>
            <div id="goBack">Go back to <span className="colorStyle" onClick={openSignInPage}>Sign In</span>  </div>
        </div>
    )

}


export default EmailAddres