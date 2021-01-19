import React, {useState} from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CreateIcon from '@material-ui/icons/Create'
import ErrorIcon from '@material-ui/icons/Error';
import { useClickAway } from "use-click-away"


function ListsCompaings() {

    const [open, setOpen] = useState(false)
    const [warning, setWarning] = useState(false)
    const arr = [3, 1, 1, 1,1,1,1,111,1,1,1,1,1,1,11]
    const clickRef = React.useRef("")

    useClickAway(clickRef, () => {
        setOpen(false);
    })

    function openStopAndEditPart(uniqueKey) {
        if (open) {
            setOpen(false)
        } else {
            setTimeout(() => setOpen(uniqueKey), 0)
            setOpen(true)
        }
    }

    function openWarningPage() {
        setWarning(true)
    }

    function closedWarningPage() {
        setWarning(false)
    }

    return (
        <>
            {arr.map((i, key) =>

                   <div className={"infoAndEditPart"} >
                    <div className="InfoCompaings" >
                        <p className="types2"><p id="officeName">Evning Colection </p></p>
                        <p className="types2"><p id="typeGenderAge">Singel Offer</p></p>
                        <p className="types2"><p id="typeGenderAge">Female</p></p>
                        <p className="types2"><p id="typeGenderAge">18-60</p></p>
                        <p className="types2"><p id="liked">45 </p></p>
                        <p className="types2"><p id="pass">456</p></p>
                        <p className="types2"><p id="typeGenderAge">14/08/19</p></p>
                        <p className="stopIcon"><MoreHorizIcon className="editCompaing"
                         onClick={() => openStopAndEditPart(key + 1)}/><NavigateNextIcon/>
                        </p>
                    </div>
                    {(open === key + 1) ? <div className={"stopAndEditPart"} ref={clickRef}>
                        <div className="editStop">Edit Campaing<p><CreateIcon className="createIcon"/></p></div>
                        <div className="editStop" onClick={openWarningPage}>Stop Campaing <p className="createIcon">
                            <ErrorIcon/></p></div>
                    </div> : ""}
                </div>)}
            {warning ? <div className="stopPage">
                <div className="stopCampaign"></div>
                <div className={"warningStopCampaign"}>
                    <div className={"message"}>
                        <p>Are you sure you want to <p>stop the campaing ?</p></p>
                    </div>
                    <div className="canselAndStopButtons">
                        <button className={"buttonCansel"} onClick={closedWarningPage}>CANSEL</button>
                        <button className={"stopButton"}>STOP THE CAMPAING</button>
                    </div>
                </div>
            </div> : ""}
        </>


    )
}

export default ListsCompaings