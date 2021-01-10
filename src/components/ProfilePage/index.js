import React from "react";
import "../../style/ProfileStyle/index.sass"
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


function Profile() {
    return (
        <>
            <div className={"profilePage"}>
                <p id={"profileText"}>Profil</p>
                <div className={"profile"}>
                    <div className={"allInfo"}>
                        <div className={"updatePhoto"}>
                            <div className={"photoProfile"}></div>
                            <div className={"updatePhotoTextAndIcon"}>
                                <p>Update photo</p>
                                <p className={"penIcon"}><CreateIcon/></p>
                            </div>
                        </div>

                        <div className={"myProfile"}>

                            <p id={"profileText"}>My Profile</p>
                            <p className={"nameInput1"}>Full Name</p>
                            <input className={"inputsProfile"}/>
                            <p className={"nameInputs"}>Phone Number</p>
                            <input className={"inputsProfile"}/>
                            <p className={"nameInputs"}>Email address</p>
                            <input className={"inputsProfile"}/>
                            <p className={"nameInputs"}>Password</p>
                            <input className={"inputsProfile"}/>
                            <p className={"nameInputs"}>Repeat password</p>
                            <input className={"inputsProfile"}/>
                            <span id={"iconPosition"}><CreateIcon/></span>
                        </div>
                        <div className={"billingInform"}>
                            <p id={"profileText"}>Billing informations</p>
                            <p className={"nameInput1"}>Campany Name</p>
                            <input className={"inputsProfile"}/>
                            <p className={"nameInputs"}>Address</p>
                            <input className={"inputsProfile"}/>
                            <p className={"billingIputs"}>Postcode</p>
                            <input className={"inputsProfile"}/>
                            <p className={"nameInputs"}>Street number</p>
                            <input className={"inputsProfile"}/>
                            <p className={"billingIputs"}>Region</p>
                            <input className={"inputsProfile"}/>
                            <p className={"nameInputs"}>Country</p>
                            <select className={"inputsProfile"}>
                                <option>Armenia</option>
                            </select>
                            {(true)?<p className={"iconTruePostcode"}><CheckIcon/></p> :
                                <p className={"iconFalsePostcode"}><CloseIcon/></p>}
                            {(false)?<p className={"iconTrueStreet"}><CheckIcon/></p> :
                                <p className={"iconFalseStreet"}><CloseIcon/></p>}
                        </div>
                   </div>
                    <button className={"saveButton"}>SAVE</button>
                </div>

            </div>
        </>
    )
}


export default Profile