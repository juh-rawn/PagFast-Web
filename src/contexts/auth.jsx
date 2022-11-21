import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser){  
           setUser(JSON.parse(recoveredUser)); 
        }

        setLoading(false);
    }, []);

    const login = (cpf, password) => {
        console.log("login auth", { cpf, password });
        
        //api criar uma session

        //****** OBS: cc => conta corrente ********

        //mock
        const loggedUser = {
            nome: 'Fulano',
            cc: '123456',
            cpf,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        //mock
        if(password === 'secret') {
            setUser(loggedUser); 
            navigate("/userPage"); //navegação para pag do user
        }
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/loginApp");
    };

    return (
        <AuthContext.Provider 
            value={{ authenticated: !!user, user, loading, login, logout 
                    }}
        >
            {children}
        </AuthContext.Provider>
    );
}