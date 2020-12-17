import React from "react";
import GeneralResults from "../DataOverview/Graphic/GeneralResults";
import RatingsCampigns from "../DataOverview/Graphic/RatingsCampings";
import AgeGraphic from "../DataOverview/Graphic/AgeGraphic";
import CitiesComponet from "../DataOverview/Graphic/GraphCities";
import Salari from "../DataOverview/Graphic/Salari";



function Analytics (){
    return(
       <>
           <div className="Graphic">Data overwier</div>
           <div className="GraphicsTitles">
               <div className="forms">
                   <GeneralResults/>
               </div>
               <div className="forms">
                   <RatingsCampigns/>
               </div>
               <div className="forms">
                   <AgeGraphic/>
               </div>
               <div className="forms">
                   <CitiesComponet/>
               </div>
               <div className="forms">
                   <Salari/>
               </div>
           </div>
           </>
    )
}

export default Analytics