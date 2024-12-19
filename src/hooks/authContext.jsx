import { createContext,  useState } from "react";


export const AuthContext = createContext();




// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({children}) => {


    const [authUser, setAuthUser] =  useState(JSON.parse(localStorage.getItem("user" || null)));
    const [token, setToken] =  useState(JSON.parse(localStorage.getItem("token" || null)));


return <AuthContext.Provider   value={{authUser, setAuthUser,token ,setToken}}>
    {children}
</AuthContext.Provider>

}