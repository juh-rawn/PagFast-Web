import React, { useContext } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import LoginPage from "./pages/tela-login/loginApp";
import HomePage from "./pages/HomePage";

import UserPage from "./pages/tela-usuario/tela-usuario";

import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/loginApp" />
        }

        return children;
    };

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/loginApp" element=
                    {<LoginPage />} />
                    <Route exact path="/" element= {<HomePage/>} />
                    <Route exact path="/userPage" element= {<Private><UserPage/></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;