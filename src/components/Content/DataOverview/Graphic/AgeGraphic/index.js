import React from "react";
import AgeRangeGraph from "../../../../../Graphics/AgeRangeGraph";



function AgeGraphic(){
    return(
        <>
        <div className="results">
            <p>Age Range</p>
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