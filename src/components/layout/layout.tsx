import React from "react";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
    return (
        <main className="w-screen h-screen flex items-center justify-center">
            <Outlet />
        </main>
    );
};
