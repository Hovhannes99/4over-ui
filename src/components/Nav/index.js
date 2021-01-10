import React, {useContext} from "react"
import "../../style/Nav/index.sass"
import MyCampaings from "../Content/MyCampaings";
import DataOverview from "../Content/DataOverview";
import ModaLnsigths from "../Content/ModaInsights";
import Analytics from "../Content/Analytics";
import SpeedIcon from '@material-ui/icons/Speed';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PieChartIcon from '@material-ui/icons/PieChart';
import BusinessIcon from '@material-ui/icons/Business';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom"
import {MyContext} from "../../App";
import AddCampaign from "../AddCampaign";

function Nav() {
    const {setAddCampaing, addCampaing} = useContext(MyContext)

    return (
        <Router>
            <div className="body">
                <div className="categories">
                    <div className="menu">
                        <div className="links">
                            <NavLink activeClassName="selected" className="lineNone" to="/home">
                                <p className="textLinks1">
                                    <p className="changeColor"><SpeedIcon/>
                                        <p>Dashboard</p></p>
                                </p>
                                <div className={"redLine"}></div>
                            </NavLink>
                        </div>
                        <div  className="links">
                            <NavLink activeClassName="selected" className="lineNone" to="/modalnsights">
                                <p className="textLinks2">
                                    <p className="changeColor"><EqualizerIcon/><p>Moda Insights</p></p>
                                </p>
                                <div  className={"redLine"}> </div>
                            </NavLink>
                        </div>
                        <div className="links">
                            <NavLink activeClassName="selected" className="lineNone" to="/analytics">
                                <p className="textLinks3">
                                    <p className="changeColor"><PieChartIcon/></p><p>Analytics</p>
                                </p>
                                <div  className={"redLine"}> </div>
                            </NavLink>
                        </div>
                        <div className="links">
                            <NavLink activeClassName="selected" className="lineNone" to="/my-camaings">
                                <p className="textLinks4">
                                    <p className="changeColor"><BusinessIcon/><p>My Campaings</p></p>
                                </p>
                                <div  className={"redLine4"}> </div>
                            </NavLink>
                        </div>
                    </div>
                    <button className="addCampaing" onClick={()=> setAddCampaing(true)}>ADD CAMPAING</button>
                </div>
                <div className="list">
                    <Switch>
                        <Route exact path="/home" component={DataOverview}/>
                        <Route path="/modalnsights" component={ModaLnsigths}/>
                        <Route path="/analytics" component={Analytics}/>
                        <Route path="/my-camaings" component={MyCampaings}/>
                    </Switch>
                    {addCampaing? <AddCampaign/>:""}
                </div>
            </div>

        </Router>
    );
}

export default Nav