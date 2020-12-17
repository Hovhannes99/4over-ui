import React from "react"
import "../../style/Head/design.css"
import NotificationsIcon from '@material-ui/icons/Notifications'
import SettingsIcon from '@material-ui/icons/Settings';


function Header() {
    return (
        <header className="header">
            <div className="logo">MÖDAIC</div>
            <div className="searchAndOption">
                <div className="search">
                    <input type="text" className="searchInput" placeholder="Search for a campaing"/>
                    <div className="iconSearch">
                        <i className="lni lni-search-alt"> </i>
                    </div>
                </div>
                <div className="option">
                    <div className="bellIcon">
                        <NotificationsIcon/>
                    </div>
                    <div className="optionIcon">
                        <SettingsIcon/>
                    </div>
                    <div className="photo"> </div>
                </div>
            </div>
        </header>
    )
}

export default Header