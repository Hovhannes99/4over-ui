import React from "react";
import "../../../../style/Soma/DataOverview/index.sass"
import NoData from "../../../NoData";


function Graphic() {
    return (
        <>
            <div className="Graphic">Data overwier</div>
            <div className="GraphicsTitles">
                <NoData/>
              </div>
        </>

    )
}


export default Graphic