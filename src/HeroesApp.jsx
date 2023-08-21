import { AppRouter } from "./router/AppRouter"
import { AuthProvider } from "./auth"

export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <h1>HeroesApp</h1>
                <AppRouter />
            </AuthProvider>

        </>

    )
}
