import React from "react";
import AgeRangeGraph from "../../../../../Graphics/AgeRangeGraph";



function AgeGraphic(){
    return(
        <>
        <div className="results">
            <h4>Age Range</h4>
            <select className="selectResults">
                <option>Dail</option>
            </select>
        </div>
            <div className="graphic">
                <AgeRangeGraph/>
            </div>

        </>

    )
}

export default AgeGraphic