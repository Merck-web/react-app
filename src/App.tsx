import React from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";

function App() {
    return (
        <>
            <Router>

                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path="/topics" element={<MainPage/>}/>
                </Routes>

            </Router>
        </>
    );
}

export default App;
