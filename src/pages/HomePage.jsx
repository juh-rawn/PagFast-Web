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
        <div id="home">
            {/* <h1 className="title"> PagFast</h1> */}
            <div className="img"><img src={require('./../assets/logo.png')} alt="logo PagFast" 
            style={{
                paddingBottom: "40px",
            }}/></div>
            <div id="container">
                <form onSubmit={handleSubmit} style={{
                    // backgroundColor: "#d9d9d9",
                    width: "100%",
                    maxWidth: "480px",
                    padding: "0.5rem",
                }}>
                    <button type="submit" style={{
                        backgroundColor:"#D9D9D9",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "5px",
                        marginBottom: "30px",
                        fontSize: "30px",
                        fontWeight: "bold",
                        width: "100%",
                        padding: "0.5rem",
                        textAlign: "center",
                        marginTop: "0.5rem",
                        border:"none",

                        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    

                    }}
                        >Login</button> 
                    <button type="submit" disabled style={{
                        backgroundColor:"#D9D9D9",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "5px",
                        fontSize: "30px",
                        fontWeight: "bold",
                        width: "100%",
                        padding: "0.5rem",
                        textAlign: "center",
                        marginTop: "0.5rem",
                        border:"none",

                        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                       
                    }}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default HomePage;