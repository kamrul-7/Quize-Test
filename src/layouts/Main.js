import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/NavBar/Nav';


export const dataContext = createContext([]);

const Main = () => {
    const dataValue = useLoaderData();
    const data = dataValue.data;
    return (
        <dataContext.Provider value={data}>
            <Nav></Nav>
            <Outlet></Outlet>
        </dataContext.Provider>
    );
};

export default Main;