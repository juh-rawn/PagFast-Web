import React, { useState } from "react";
import "./tela-login/styles.css";

const HomePage = () => {

    // const [cpf, setCpf] = useState("");
    // const [password, setPassword] = useState("");

    // const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log("submit", { cpf, password});
// };
    return (
        <div id="HomePage">
            <h1 className="title"> pagFast</h1>
            <form className="form" 
            // onSubmit={handleSubmit}
            >
                <div className="homeBtn">
                    <button type="submit">Login</button> 
                    {/* fazer validação de mascara e placeholder */}
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default HomePage;