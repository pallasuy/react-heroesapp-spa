import { Navigate, Route, Routes } from "react-router"
import { HeroesApp } from "../HeroesApp"
import { DC, Marvel } from "../heroes/pages/"
import { Login } from "../auth/pages"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={'marvel'} />} />
                <Route path="*" element={<Navigate to={'marvel'} />} />
                <Route path="marvel" element={<Marvel />} />
                <Route path="dc" element={<DC />} />
                <Route path="login" element={<Login />} />

            </Routes>
        </>
    )
}
