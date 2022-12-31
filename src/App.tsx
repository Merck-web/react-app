import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage";

function App() {
    return (
        <>

            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path="/brands" element={<MainPage/>}/>
                <Route path="/companies" element={<MainPage/>}/>
                <Route path="/contacts" element={<MainPage/>}/>
            </Routes>

        </>
    );
}

export default App;
