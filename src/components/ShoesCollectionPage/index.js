import React, {useState} from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import "../../style/Soma/ShoesStyle/index.sass"


function ShoesCollectionPage(){
    const [arr, setArr] = useState([{id: 1, name:"Cecilia Welch", email:"heather_keeling@gottlieb.ca", age:"18", gender:"Female", city:"New Year", status: true},
                                             {id: 2, name:"Sara Glover", email:"floyd_brakus@lindgren.com", age:"20", gender:"Female", city:"California", status: false},
                                             {id: 3, name:"Cecilia Welch", email:"heather_keeling@gottlieb.ca", age:"18", gender:"Female", city:"New Year", status: false}])

   function likeOurPass(id){
      setArr(arr.map((i)=>{
          if (i.id === id) {
              return {
                  ...i,
                  status: !i.status
              }
          }
          return i

       }))
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
                            {arr.map((i)=>
                                <div className={"infoList"} key={i.id}>
                                   <p className={"nameStyle"}>{i.name}</p>
                                   <p className={"emailStyle"}>{i.email}</p>
                                   <p className={"ageStyle"}>{i.age}</p>
                                   <p className={"ageStyle"}>{i.gender}</p>
                                   <p className={"emailStyle"}>{i.city}</p>
                                    {i.status?<button className={"buttonPass"} onClick={()=>likeOurPass(i.id)}>Pass</button>:
                                        <button className={"buttonLike"} onClick={()=>likeOurPass(i.id)}>Like</button> }
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShoesCollectionPage