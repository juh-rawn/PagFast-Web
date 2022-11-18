import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import "./tela-usuario.css"

const UserPage = () => {

    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (

        <div id="UserPage">
            <h1 className="title"> PAGINA USUARIO</h1>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
};

export default UserPage;