import React from "react";
import { useNavigate } from "react-router-dom";
//import "./tela-login/styles.css";
import "./HomePage.css";
import "./../assets/logo.png";

const HomePage = () => {

    const navigate = useNavigate();

    const handleSubmit = event => {
        navigate("/loginApp");
    }

    return (
        <div id="HomePage">
            <h1 className="title"> PagFast</h1>
            <img src={require('./../assets/logo.png')} alt="logo PagFast"/>
            <form onSubmit={handleSubmit}>
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