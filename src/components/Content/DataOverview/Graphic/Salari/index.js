import React from "react";
import GraphSalari from "../../../../../Graphics/GraphSalari";




function Salari(){
    return(
        <>
            <div className="results">
                <p>By Anual Salary</p>
                <select className="selectResults">
                    <option>Dail</option>
                </select>
            </div>
            <div className="graphic">
                <GraphSalari/>
            </div>

        </>

    )
}

export default Salari