import React from "react";
import "../../../../../style/Soma/DataOverview/index.sass"
import CitiesGraphic from "../../../../../Graphics/Cities/index";




function CitiesComponet (){

    return(
        <>
            <div className="results">
                <p>Cities</p>
                <select className="selectResults">
                    <option>Dail</option>
                </select>
            </div>
            <div className="graphic">
                <CitiesGraphic/>
            </div>

        </>
    )
}

export default CitiesComponet
