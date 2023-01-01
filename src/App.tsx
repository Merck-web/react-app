import React from 'react';
import './App.css';
import TopInfo from "./pages/main/elements/TopInfo";
import Header from "./pages/main/elements/Header";
import RouterView from "./router/router";

///REDUX
import {Provider} from 'react-redux';
import {store} from './redux/store';
///REDUX

///CONTEXT
interface AppContextInterface {
    city: string
    setCity: React.Dispatch<React.SetStateAction<any>>
    links: { link: string, name: string }[]
}

export const Context = React.createContext<AppContextInterface | null>(null);
///CONTEXT

function App() {
    const [city, setCity] = React.useState('Москва');
    const links = [
        {
            link: '/companies',
            name: 'Компания'
        },
        {
            link: '/brands',
            name: 'Бренды'
        },
        {
            link: '/contacts',
            name: 'Контакты'
        },
    ]

    return (
        <Provider store={store}>
            <Context.Provider value={{city, setCity, links}}>
                <TopInfo/>
                <Header/>
                <RouterView/>
            </Context.Provider>
        </Provider>
    );
}

export default App;
