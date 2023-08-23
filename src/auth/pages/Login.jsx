import { useContext } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext";


export const Login = () => {



    const { login } = useContext(AuthContext);

    const navigate = useNavigate();


    const onLogin = () => {

        login('Gabriel Pallas');


         const lastPath = localStorage.getItem('lastpath') ?? '/marvel';

        navigate(lastPath, {
            replace: true
        });

    }

    return (
        <>
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />
                <button className="btn btn-primary"
                    onClick={onLogin}>
                    Login
                </button>
            </div>
        </>

    )
}
