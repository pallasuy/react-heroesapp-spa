import { Route, Routes } from "react-router"
import {  HeroesRoutes } from "../heroes"
import { Login } from "../auth"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<HeroesRoutes />} />

            </Routes>
        </>
    )
}
