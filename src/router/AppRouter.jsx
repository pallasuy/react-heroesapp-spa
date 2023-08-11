import { Navigate, Route, Routes } from "react-router"
import { DC, Marvel } from "../heroes"
import { Login } from "../auth"
import { Navbar } from "../ui"


export const AppRouter = () => {
    return (
        <>
        <Navbar/>
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
