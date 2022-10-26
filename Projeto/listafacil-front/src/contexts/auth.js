import {createContext, useState} from "react";

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [tokenId, setTokenId] = useState("");

    function sessionLogin(token) {
        if (token !== '') {
            setTokenId(token);
        }
    }

    function sessionLogout(token) {
        if (token !== '' && token == tokenId) {
            setTokenId("");
        }
    }

    return(
        <AuthContext.Provider value={{token: tokenId, sessionLogin, sessionLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;