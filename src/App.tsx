import React from 'react';
import './App.css';
import TopInfo from "./pages/main/elements/TopInfo";
import Header from "./pages/main/elements/Header";
import RouterView from "./router/router";

function App() {


    return (
        <>
            <TopInfo/>
            <Header/>
            <RouterView/>
        </>
    );
}

export default App;
