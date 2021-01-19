import React from "react";
import "../../../../../style/Soma/DataOverview/index.sass"
import Example from "../../../../../Graphics/Example";


function GeneralResults() {
    return (
        <>
            <div className="results">
                <p>General Results</p>
                <select className="selectResults">
                    <option>Dail</option>
                </select>
            </div>
            <div className="graphic">
                <Example/>
            </div>
        </>
    )

}

export default GeneralResults