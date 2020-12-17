import React from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';




function ListsCompaings(){


    return(
        <div className="InfoCompaings">
            <p className="types2"><p id="officeName">Evning Colection </p></p>
            <p className="types3"><p id="typeGenderAge">Singel Offer</p></p>
            <p className="types4"><p id="typeGenderAge">Female</p></p>
            <p className="types4"><p id="typeGenderAge">18-60</p></p>
            <p className="types2"><p id="liked">45 </p></p>
            <p className="types2"><p id="pass">456</p></p>
            <p className="types3"><p id="typeGenderAge">14/08/19</p></p>
            <p className="stopIcon"><MoreHorizIcon/><NavigateNextIcon/></p>
        </div>
    )
}

export default ListsCompaings