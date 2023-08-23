import { Link, NavLink, useNavigate } from 'React-router-dom';
import { AuthProvider } from '../../auth/context/AuthProvider';
import { AuthContext } from '../../auth/context/AuthContext';
import { useContext } from 'react';


export const Navbar = () => {


    const navigate = useNavigate();

    const { logout,user } = useContext(AuthContext);

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            {/* className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} */}
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                        to="/search"
                    >
                        Search
                    </NavLink>

                    {/*  <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
            to="/search"
        >
            Search
        </NavLink>

        <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
            to="/hero"
        >
            Hero
        </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>

                    <button className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                        Logout
                    </button>


                </ul>
            </div>
        </nav >

    )
}
