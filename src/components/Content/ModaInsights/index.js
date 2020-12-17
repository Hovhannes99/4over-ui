import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListsCompaings from "../MyCampaings/ListsCompaings";



function ModaLnsigths(){
    return(
        <>
            <div className="myCampaings">
                <p className="rubrig">My Campaings</p>
                <div className="table">
                    <select className="filtr">
                        <option>All</option>
                        <option>pp</option>
                    </select>
                    <div className="lists">
                        <div className="miniHead">
                            <p className="types"><p id="name">NAME</p> <p id="arrow"><ExpandMoreIcon/></p></p>
                            <p className="types"><p id="name2">TYPE</p> <p id="arrow"><ExpandMoreIcon/></p></p>
                            <p className="types"><p id="name2">GENDER </p><p id="arrow"><ExpandMoreIcon/></p></p>
                            <p className="types"><p id="name">AGE RENG</p> <ExpandMoreIcon/></p>
                            <p className="types"><p id="name">LIKED</p><p id="arrow"><ExpandMoreIcon/></p></p>
                            <p className="types"><p id="name">PASS</p><p id="arrow"><ExpandMoreIcon/></p></p>
                            <p className="types"><p id="name">START DATE</p><ExpandMoreIcon/></p>
                        </div>
                        <ListsCompaings/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ModaLnsigths