import React from "react";
import "../../../../../style/Title/DataOverview/index.sass"
import CitiesGraphic from "../../../../../Graphics/Cities/index";




function CitiesComponet (){

    return(
        <>
            <div className="results">
                <h4>Cities</h4>
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
