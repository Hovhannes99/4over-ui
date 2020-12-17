import React from "react";
import "../../../../../style/Title/DataOverview/index.sass"
import Example from "../../../../../Graphics/Example";


function GeneralResults() {
    return (
        <>
            <div className="results">
                <h4>General Results</h4>
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