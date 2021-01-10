import React, {useContext} from "react";
import "../../style/StyleRegister/index.sass"
import NewPassword from "./NewPassword";
import EmailAddres from "./EmailAddres";
import {MyContext} from "../../App";

function ResetPassword() {
 const { resetPassword} = useContext(MyContext)
    return (
        <div className="register">
            <div className="imageFilter">
            </div>
            { resetPassword?<NewPassword/>  :<EmailAddres/> }
        </div>
    )

}

export default ResetPassword