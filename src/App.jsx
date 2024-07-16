import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col backgroundColor textColor openSansFont">
            <Header />
            <main className="flex-1 flex flex-col">
                <Outlet />
            </main>
        </div>
    );
};

export default App;
