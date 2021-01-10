import React, {useContext} from "react";
import "../../../../style/Soma/DataOverview/index.sass"
import GeneralResults from "./GeneralResults";
import RatingsCampigns from "./RatingsCampings";
import AgeGraphic from "./AgeGraphic";
import CitiesComponet from "./GraphCities";
import Salari from "./Salari";
import NoData from "../../../NoData";
import {MyContext} from "../../../../App";
import AddCampaign from "../../../AddCampaign";


function Graphic() {
    const {addCampaing}= useContext(MyContext)

    if(addCampaing){
     return(
         <AddCampaign/>
     )
    }
    return (
        <>
            <div className="Graphic">Data overwier</div>

            <div className="GraphicsTitles">

                <NoData/>
                  {/*<div className="forms">*/}
                  {/*      <GeneralResults/>*/}
                  {/*</div>*/}
                  {/*<div className="forms">*/}
                  {/*      <RatingsCampigns/>*/}
                  {/*</div>*/}
                  {/*<div className="forms">*/}
                  {/*    <AgeGraphic/>*/}
                  {/*</div>*/}
                  {/*<div className="forms">*/}
                  {/*          <CitiesComponet/>*/}
                  {/*</div>*/}
                  {/*<div className="forms">*/}
                  {/*    <Salari/>*/}
                  {/*</div>*/}
              </div>
        </>

    )
}


export default Graphic