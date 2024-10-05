import { createContext,  useState } from "react";


export const AuthContext = createContext();




// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({children}) => {


    const [authUser, setAuthUser] =  useState(JSON.parse(localStorage.getItem("user" || null)));

return <AuthContext.Provider   value={{authUser, setAuthUser}}>
    {children}
</AuthContext.Provider>

}