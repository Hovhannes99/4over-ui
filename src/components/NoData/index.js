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
                    <p style={{fontSize:"21px"}}>No Data to Show</p>
                    <p style={{color: "#9FA9BA", fontSize:"14px"}}>There are many ways to market a product or a service and</p>
                </p>
                <button className={"addCampaing"} onClick={() => {setAddCampaing(true)}}>ADD CAMPAING
                </button>
            </div>
        </div>
    )


}


export default NoData