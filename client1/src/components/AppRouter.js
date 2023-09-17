import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import {Context} from "../index";
import NavBar from "./NavBar";

const AppRouter = () => {
     const {user} = useContext(Context)


    console.log(user)
    return (
        <Router>
            <NavBar />
            <Routes>
                {authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={user.isAuth ? <Component /> : <Navigate to="/" />} />
                ))}
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component /> } />
                ))}
                <Route path="*" element={<Navigate replace to="/" />} />
                {/* Добавьте другие маршруты, если необходимо */}
            </Routes>
        </Router>
    );
};

export default AppRouter;