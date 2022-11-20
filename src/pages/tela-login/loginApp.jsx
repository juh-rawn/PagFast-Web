import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import "./styles.css";
import "./../../assets/logo.png";

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { cpf, password});

    login(cpf, password);// integração com o contexto / api
    };

    return (
        <div id="login">
            {/* <h1 className="title"> Login do sistema</h1> */}
            <img src={require('./../../assets/logo.png')} alt="logo PagFast"/>
            <div className="auth" style={{
                display:"none",
            }}>
                <p>{String(authenticated)} </p>
            </div>
            
            <form className="form" onSubmit={handleSubmit}
                style={{
                    borderRadius: "9px",
                    padding: "0.6rem",
                }}
            >
                
                <div className="field">
                    <label htmlFor="number">CPF</label> 
                    {/* fazer validação de mascara e placeholder */}
                    <input type="text" name="cpf" 
                        maxLength={14}
                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                        title="000.000.000-00"
                        placeholder="000.000.000-00"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}  
                        style={{
                            borderRadius: "5px", 
                            border: "none", 
                            padding: "0.3rem",
                            textAlign: "left",
                            marginTop: "0.5rem",
                            justifyContent: "center",
                        }}
                    />
                </div>
        
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" 
                        value={password}
                        placeholder="******"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            borderRadius: "5px", 
                            border: "none", 
                            padding: "0.3rem",
                            textAlign: "left",
                            marginTop: "0.5rem",
                            justifyContent: "center",
                        }}
                    />
                </div>
                <div className="actions">
                    <button type="submit" 
                    style={{
                        borderRadius: "5px", 
                        border: "none", 
                        padding: "0.5rem",
                        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                    >Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;