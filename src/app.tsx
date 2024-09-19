import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<p>Hello</p>} />
                </Route>
            </Routes>
        </>
    );
}
