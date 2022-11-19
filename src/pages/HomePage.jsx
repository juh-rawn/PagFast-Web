import React from "react";
import { useNavigate } from "react-router-dom";
import "./tela-login/styles.css";

const HomePage = () => {

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate("/loginApp");
    }

    // const [cpf, setCpf] = useState("");
    // const [password, setPassword] = useState("");

    // const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log("submit", { cpf, password});
// };
// return (
//     <form onSubmit={handleSubmit}>
//       <input />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

    return (
        <div id="HomePage">
            <h1 className="title"> pagFast</h1>
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