import React from 'react';
import './App.scss';
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
    links: { link: string, name: string }[],
    openNav: Boolean,
    setOpenNav: React.Dispatch<React.SetStateAction<any>>
}

export const Context = React.createContext<AppContextInterface | null>(null);

///CONTEXT

function App() {
    const [city, setCity] = React.useState('Москва');
    const links = [{link: '/companies', name: 'Компания'}, {link: '/brands', name: 'Бренды'}, {link: '/contacts', name: 'Контакты'},];
    const [openNav, setOpenNav] = React.useState(false);

    return (
        <Provider store={store}>
            <Context.Provider value={{city, setCity, links, openNav, setOpenNav}}>
                <TopInfo/>
                <Header/>
                <RouterView/>
            </Context.Provider>
        </Provider>
    );
}

export default App;
