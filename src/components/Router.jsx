import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import StartPage from "../pages/Start/StartPage";

//  Router 를 사용하려면 모든 링크를 <BrowserRouter> 로 감싸주어야 한다.
export default function Router() {
    return (
        <BrowserRouter>
            <nav>
                <NavLink className={({isActive}) => "nav-link" + (isActive ? " click" : " ")} to='/'>
                    Start
                </NavLink>
                <NavLink className={({isActive}) => "nav-link" + (isActive ? " click" : " ")} to='/about'>
                    About
                </NavLink>
                <NavLink className={({isActive}) => "nav-link" + (isActive ? " click" : " ")} to='/contact'>
                    Contact
                </NavLink>
            </nav>
            <Routes>
                <Route exact path="/" element={<StartPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}