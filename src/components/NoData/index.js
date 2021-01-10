import React, {useContext, useState} from "react";
import "../../style/Nav/index.sass"
import "../../style/Soma/DataOverview/index.sass"
import {MyContext} from "../../App";



function NoData() {

    const { setAddCampaing} = useContext(MyContext)

    return (
        <div className={"noData"}>
            <div className={"newData"}>
                <div className={"iconEqvalizer"}><i className="lni lni-bar-chart"></i></div>
                <p className={"textNoData"}>
                    <h1>No Data to Show</h1>
                    <h4 style={{color: "#9FA9BA"}}>There are many ways to market a product or a service and</h4>
                </p>
                <button className={"addCampaing"} onClick={() => {
                    setAddCampaing(true)
                }}>ADD CAMPAING
                </button>
            </div>
        </div>
    )


}


export default NoData