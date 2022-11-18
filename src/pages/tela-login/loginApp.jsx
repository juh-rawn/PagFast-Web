import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import "./styles.css";

const LoginPage = () => {
    const { authenticaded, login } = useContext(AuthContext);

    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { cpf, password});

    login(cpf, password);// integração com o contexto / api
};

    return (
        <div id="login">
            <h1 className="title"> Login do sistema</h1>
            <p>{String(authenticaded)}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="number">CPF</label> 
                    {/* fazer validação de mascara e placeholder */}
                    <input type="text" name="cpf" 
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                    title="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;