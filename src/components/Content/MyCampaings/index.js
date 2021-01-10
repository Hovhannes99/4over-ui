import React from "react"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../../../style/Soma/MyCompaings/index.sass"
import ListsCompaings from "./ListsCompaings";

function MyCampaings() {
    return (
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
                             <p className="types"><p>NAME</p> <p><ExpandMoreIcon/></p></p>
                             <p className="types"><p>TYPE</p><p><ExpandMoreIcon/></p></p>
                             <p className="types"><p>GENDER</p><p ><ExpandMoreIcon/></p></p>
                             <p className="types"><p>AGE RENG</p> <p><ExpandMoreIcon/></p></p>
                             <p className="types"><p>LIKED</p><p><ExpandMoreIcon/></p></p>
                             <p className="types"><p>PASS</p><p><ExpandMoreIcon/></p></p>
                             <p className="types"><p>START DATE</p><ExpandMoreIcon/></p>
                        </div>
                        <ListsCompaings/>
                    </div>
                </div>
            </div>
        </>
    )

}


export default MyCampaings