import React from 'react';
import {Routes, Route} from 'react-router-dom';

const Home = React.lazy(() => import('../pages/main/MainPage'))
const Loading = () => <p>Loading ...</p>;


const RouterView = () => {
    return (
        <React.Suspense fallback={<Loading/>}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/topics' element={<Home/>}/>
                <Route path='/settings' element={<Home/>}/>

                <Route
                    path="*"
                    element={
                        <div>
                            <h2>404 Page not found</h2>
                        </div>
                    }
                />
            </Routes>
        </React.Suspense>
    );
}


export default RouterView;
