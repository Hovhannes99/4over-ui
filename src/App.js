import React, { useState} from "react"
import Main from "./components/Main";
import Login from "./components/Login";



export const MyContext = React.createContext("Error");


const App = () => {
    const [login,setLogin] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [forgotPasswordPage, setForgotPasswordPage] = useState(false)
    const [resetPassword, setResetPassword] = useState(false)
    const [addCampaing, setAddCampaing] = useState(false)

    const value = {login,setLogin, signIn, setSignIn, forgotPasswordPage, setForgotPasswordPage,
                   resetPassword,setResetPassword, addCampaing, setAddCampaing}

    return (
        <MyContext.Provider value={value}>
            {login ? <Main/> : <Login/>}
        </MyContext.Provider>
    )
}

export default App;
