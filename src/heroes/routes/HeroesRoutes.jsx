import { Navigate, Route, Routes } from "react-router"
import { Navbar } from "../../ui"
import { DC, Hero, Marvel, Search } from "../pages"


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">

                <Routes>
                    <Route path="/*" element={<Navigate to={'marvel'} />} />
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<DC />} />
                    <Route path="search" element={<Search />} />
                    <Route path="hero" element={<Hero />} />

                </Routes>
            </div>
        </>
    )
}
