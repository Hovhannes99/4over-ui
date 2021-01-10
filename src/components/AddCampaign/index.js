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
                            <h2>Add Campaign</h2>
                            <div>
                                <h5 style={{color: "#9F9F9F"}}>Camaign Name</h5>
                                <input className={"campaignNameInput"}/>
                            </div>
                        </div>
                        <div className={"styleCampaign"}>
                            <div className={"singleOffer"}>
                                <h3>Chose Test Type</h3>
                                <h6 style={{marginTop: "3%", color: "#D3D4D4"}}>SINGLE OFFER</h6>
                                <div className={"fotoSingle"}> </div>
                                <div>
                                    <label>
                                        <input type={"radio"} name={"offer"}/>
                                        <CheckIcon className={"inputRadio"}/>
                                    </label>
                                </div>
                            </div>
                            <div className={"singleOffer"}>
                                <h6 style={{marginTop: "13%", color: "#D3D4D4"}}>SINGLE OFFER</h6>
                                <div className={"fotoMultiple"}> </div>
                                <label>
                                    <input type={"radio"} name={"offer"}/>
                                    <CheckIcon className={"inputRadio"}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={"detailsWay"}>
                        <h4 style={{marginTop: "12.5%"}}>Detalis</h4>
                        <h5 style={{marginTop: "6%", color: "#9fa9ba"}}>Brand</h5>
                        <input className={"campaignNameInput"}/>
                        <h5 style={{marginTop: "4%", color: "#9FA9BA"}}>Price</h5>
                        <input className={"campaignNameInput"}/>
                        <h5 style={{marginTop: "4%", color: "#9FA9BA"}}>Details</h5>
                        <textarea className={"campaignDetailsText"}/>
                        <div className={"ageRange"}>
                            <h5>AGE RANGE</h5><h5>{val[0]}-{val[1]}</h5>
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