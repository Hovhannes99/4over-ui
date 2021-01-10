import React from "react";
import "../../../../../style/Soma/DataOverview/index.sass"
import Ratings from "../../../../../Graphics/Ratings";


function RatingsCampigns() {
    return (
        <>
            <div className="results">
                <h4>Ratings by Test Campaigns</h4>
                <select className="selectResults">
                    <option>Dail</option>
                </select>
            </div>
            <div className="graphic">
                <Ratings/>
            </div>
        </>
    )
}

export default RatingsCampigns

