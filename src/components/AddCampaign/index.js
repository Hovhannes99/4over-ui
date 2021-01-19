import React, {useContext, useState} from "react";
import "../../style/AddCampaign/index.sass"
import CheckIcon from '@material-ui/icons/Check';
import {Slider} from "@material-ui/core"
import {MyContext} from "../../App";


function AddCampaign() {
    const  [val, setVal] = useState([18, 45])
    const { setAddCampaing} = useContext(MyContext)

    const updateRange = ( e, date)=>{
        setVal(date)
    }
    return (
        <>
            <div className={"addCampaingBackground"}> </div>
            <div className={"addCampaingPage"}>
                <div className={"newCampaingWay"}>
                    <div className={"campaingAdd"}>
                        <div className={"CampaignName"}>
                            <p style={{fontSize:"21px"}}>Add Campaign</p>
                            <div>
                                <p style={{color: "#9F9F9F", fontSize:"14px"}}>Camaign Name</p>
                                <input className={"campaignNameInput"}/>
                            </div>
                        </div>
                        <div className={"styleCampaign"}>
                            <div className={"singleOffer"}>
                                <p style={{fontSize:"15px"}}>Chose Test Type</p>
                                <p style={{marginTop: "3%", color: "#D3D4D4", fontSize:"14px"}}>SINGLE OFFER</p>
                                <div className={"fotoSingle"}> </div>
                                <div>
                                    <label>
                                        <input type={"radio"} name={"offer"}/>
                                        <CheckIcon className={"inputRadio"}/>
                                    </label>
                                </div>
                            </div>
                            <div className={"singleOffer"}>
                                <p style={{marginTop: "13%", color: "#D3D4D4",fontSize:"14px"}}>MULTIPLE OFFER</p>
                                <div className={"fotoMultiple"}> </div>
                                <label>
                                    <input type={"radio"} name={"offer"}/>
                                    <CheckIcon className={"inputRadio"}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={"detailsWay"}>
                        <p style={{marginTop: "12.5%",fontSize:"15px"}}>Detalis</p>
                        <p style={{marginTop: "6%", color: "#9fa9ba", fontSize:"14px"}}>Brand</p>
                        <input className={"campaignNameInput"}/>
                        <p style={{marginTop: "4%", color: "#9FA9BA"}}>Price</p>
                        <input className={"campaignNameInput"}/>
                        <p style={{marginTop: "4%", color: "#9FA9BA", fontSize: "14px"}}>Details</p>
                        <textarea className={"campaignDetailsText"}/>
                        <div className={"ageRange"}>
                            <p style={{fontSize:"14px"}}>AGE RANGE</p><p style={{fontSize:"14px"}}>{val[0]}-{val[1]}</p>
                        </div>
                        <div className={"slider"}>
                            <Slider id={"Slider"} value={val} onChange={updateRange}  />
                        </div>
                        <div className={"MaleOrFemale"}>
                            <button className={"male"}>Male</button>
                            <button className={"male"}>Female</button>
                        </div>
                        <div className={"browseAndText"}>
                            <p>Upload photos for test</p>
                            <button className={"browse"}>Browse</button>
                        </div>


                    </div>
                </div>
                <footer className={"canselAndRun"}>
                    <div className={"runAndCansel"}>
                        <button className={"canselButton"} onClick={()=>{setAddCampaing(false)}}>CANCEL</button>
                        <button className={"buttonRun"}>RUN TEST</button>
                    </div>
                </footer>
            </div>
        </>
    );
}


export default AddCampaign