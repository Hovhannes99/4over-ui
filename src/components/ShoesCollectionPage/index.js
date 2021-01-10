import React, {useState} from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import "../../style/Soma/ShoesStyle/index.sass"


function ShoesCollectionPage() {
    const [likeAndPass, setLikeAndPass] = useState(false)
    const arr = [3, 1, 1, 1,1,1,1,11,1,1,1,1,1,1,11]

    function likeOurPass(){
        if (likeAndPass){
            setLikeAndPass(false)
        }else {
            setLikeAndPass(true)
        }
    }

    return (
        <>
            <div className={"Graphic"}><p>Shoes May Collection</p></div>
            <div className={"ShoesBody"}>
                <div className={"impressionsAndLists"}>
                    <p className={"nameUsers"}>Users Impressions</p>
                    <div className={"listsCollection"}>
                        <div className={"miniHeadCollection"}>
                            <div className={"styleText"}><p>NAME</p><p><ExpandMoreIcon/></p></div>
                            <div className={"styleEmail"}><p>EMAIL</p><p><ExpandMoreIcon/></p></div>
                            <div className={"styleText"}><p>AGE RANGE</p><p><ExpandMoreIcon/></p></div>
                            <div className={"styleText"}><p>GENDER</p><p><ExpandMoreIcon/></p></div>
                            <div className={"styleCity"}><p>CITY</p><p><ExpandMoreIcon/></p></div>
                            <div className={"styleStatus"}><p>STATUS</p><p><ExpandMoreIcon/></p></div>
                        </div>
                        <div className={"infoCollection"}>
                            {arr.map((i,key)=>
                                <div className={"infoList"}>
                                   <p className={"nameStyle"}>Cecilia Welch</p>
                                   <p className={"emailStyle"}>heather_keeling@gottlieb.ca</p>
                                   <p className={"ageStyle"}>18</p>
                                   <p className={"ageStyle"}>Female</p>
                                   <p className={"emailStyle"}>New York</p>
                                    {likeAndPass?<button className={"buttonLike"} onClick={likeOurPass}>Like</button>
                                    :<button className={"buttonPass"} onClick={likeOurPass}>Pass</button>}

                                 </div>)}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShoesCollectionPage