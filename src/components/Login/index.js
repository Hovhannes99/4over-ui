import React, {useContext} from "react";
import "../../style/StyleRegister/index.sass"
import SignIn from "./SignIn";
import {MyContext} from "../../App";
import SignUp from "../Register/SignUp";
import ResetPassword from "../ResetPassword/index";


function Login(){
    const {signIn, forgotPasswordPage} = useContext(MyContext);

    if(forgotPasswordPage){
        return(<ResetPassword/>)
    }
    return (
        <>
        <div className="register">
            <div className="imageFilter">
            </div>
            {signIn ? <SignUp/>: <SignIn/>}

        </div>
        </>

    )
}

export default Login