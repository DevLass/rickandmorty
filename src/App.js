// Essential
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Styles
// import "./App.css";
import styles from './App.module.css'

//Components
import Main from "./pages/main"

//Assets
import portal from "./assets/portal.png";

export default (props) => {
    return (
        <>
        <p>teste teste</p>
            <Router>
                <Routes>
                    <Route path="/Main" element={<Main />} />
                </Routes>
                <Link to="/Main">
                    <img src={portal} alt="" className={styles.rotateCenter} />
                </Link>
            </Router>
        </>
    );
};
