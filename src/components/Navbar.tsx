// Navbar.tsx

import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const {
        isAuthenticated,
        logout,
        user,
    } = useAuth0();

    return (
        <nav>
            <Link to="/">
                Dashboard
            </Link>

            {" | "}

            <Link to="/create">
                Create Task
            </Link>

            {isAuthenticated && (
                <>
                    <span>
                        {user?.name}
                    </span>

                    <button
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    returnTo:
                                    window.location.origin,
                                },
                            })
                        }
                    >
                        Logout
                    </button>
                </>
            )}

        </nav>
    );
};

export default Navbar;
