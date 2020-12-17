import React from "react";
import "../../../../style/Title/DataOverview/index.sass"
import GeneralResults from "./GeneralResults";
import RatingsCampigns from "./RatingsCampings";
import AgeGraphic from "./AgeGraphic";
import CitiesComponet from "./GraphCities";
import Salari from "./Salari";




function Graphic() {
    return (
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


export default Graphic