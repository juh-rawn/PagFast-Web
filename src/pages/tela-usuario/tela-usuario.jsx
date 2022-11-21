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
            <img src={require('./../../assets/user.png')} alt="foto usuário" style={{
                float:"right",
            }}/>
            <h1 className="title" style={{

                display: "flex",
                backgroundColor: "#03ffff",
                color: "#fff",
                fontSize: "25px",
                fontWeight: "bold",
                padding: "0.5rem",

            }}> Olá, Fulano</h1>
            
            <h3 className="dados" style={{

                display: "flex",
                backgroundColor: "#03ffff",
                color: "#000",
                fontSize: "10px",
                paddingLeft: "0.5rem",
                paddingBottom: "0.3rem",

            }}>Ag 0001 Cc: 12345678-9</h3>
            <div className="auth" style={{

                display:"none",

            }}>
                <p>{String(authenticated)}</p>
            </div>
            
            <div className="Saldo disponível" style={{
                
                padding: "0.6rem",
                backgroundColor:"#d5d5d5",
                alignItems: "center",
                maxWidth: "50%",
                position: "sticky",
                margin: "auto",
                marginLeft:"25%",
                textAlign: "left",
               
                justifyContent: "center",
                flexDirection: "column",
                display: "flex",
                

            }}>saldo disponível</div>
            <button onClick={handleLogout} style={{
                 float:"right",
            }}>Sair</button>
        </div>
    );
};

export default UserPage;