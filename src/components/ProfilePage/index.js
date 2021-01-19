import React, {useState} from "react";
import "../../style/ProfileStyle/index.sass"
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';




function Profile() {
 const [imgPreview, setImgPreview] = useState(null)
 const [error, setError] =useState(false)
    function handleImageChange(e){
        const selected = e.target.files[0]
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"]
        if(selected && ALLOWED_TYPES.includes(selected.type)){
           let reader = new FileReader()
           reader.onloadend = () =>{
               console.log(e)
               setImgPreview(reader.result)
           }
           reader.readAsDataURL(selected)

        }else {
            setError(true)
        }

    }

    return (
        <>
            <div className={"profilePage"}>
                <p id={"profileText"}>Profil</p>
                {error && alert("File not supported")}
                <div className={"profile"}>
                    <div className={"allInfo"}>
                        <div className={"updatePhoto"}>
                            <div className={"photoProfile"}
                                 style={{background: imgPreview ?`url("${imgPreview}")`: "black"}}> </div>
                            <div className={"updatePhotoTextAndIcon"}>
                                <p>Update photo</p>
                                <div  className={"penIcon"} >
                                    <label form={"icon"} style={{cursor: "pointer"}}><CreateIcon/>
                                        <input id={"icon"} type={"file"} style={{display: "none"}} onChange={handleImageChange}/>
                                    </label>
                                    </div>
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
                            <input className={"inputsProfile"} type={"password"}/>
                            <p className={"nameInputs"}>Repeat password</p>
                            <input className={"inputsProfile"} type={"password"}/>
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
                            {(false)?<p className={"iconTruePostcode"}><CheckIcon/></p> :
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