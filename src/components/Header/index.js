import React, {useContext, useState} from "react"
import "../../style/Head/design.css"
import NotificationsIcon from '@material-ui/icons/Notifications'
import SettingsIcon from '@material-ui/icons/Settings';
import {MyContext} from "../../App";
import { useClickAway } from "use-click-away"



function Header() {
     const [ballNotices, setBallNotices] = useState(false)
     const  [logOut, setLogOut] = useState(false)
     const {setLogin} = useContext(MyContext)
     const clickRef = React.useRef("")

     useClickAway(clickRef, () => {
         setBallNotices(false);
         setLogOut(false)
    })

    function openNotices(){
         if(!ballNotices){
             setBallNotices(true)
             setLogOut(false)
         }else(
             setBallNotices(false)
        )
    }
    function openLogOutPart(){
         if(!logOut){
              setLogOut(true)
             setBallNotices(false)
         }else {
             setLogOut(false)

         }
    }
    function goToSignInPage(){
        setLogin(false)
    }

    return (
        <>

        <header className="header" ref={clickRef} >
            <div className="logo">MÖDAIC</div>
            <div className="searchAndOption">
                <div className={"parts"}>
                    {ballNotices? <div className="notices">
                        <div className="noticesText"><p className="textOption">Campaign <span style={{color:"red"}}>Evening Dress </span>started</p></div>
                        <div className="noticesText"><p className="textOption">Campaign <span style={{color:"red"}}>Evening Dress </span>ends today</p></div>
                        <div className="noticesText"><p className="textOption"> <span style={{color:"red"}}>Evening Dress </span>campaign reached 5k likes </p></div>
                    </div> :""}
                    {logOut ? <div className="logOutPart">
                            <div className="noticesText"><p className="textOption">Edit Profile</p> </div>
                            <div className="noticesText" onClick={goToSignInPage}><p className="textOption">Log Out</p> </div>
                        </div>:""}
                </div>
                <div className="search">
                    <input type="text" className="searchInput" placeholder="Search for a campaing"/>
                    <div className="iconSearch">
                        <i className="lni lni-search-alt"> </i>
                    </div>
                </div>
                <div className="option">
                    <div className="bellIcon">
                        <NotificationsIcon onClick={openNotices}/>
                    </div>
                    <div className="optionIcon">
                        <SettingsIcon/>
                    </div>
                    <div className="photo" onClick={openLogOutPart}></div>
                </div>

            </div>
        </header>

    </>
    )
}

export default Header