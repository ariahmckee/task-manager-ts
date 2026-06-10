// Navbar.tsx

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                Dashboard
            </Link>

            {" | "}

            <Link to="/create">
                Create Task
            </Link>
        </nav>
    );
};

export default Navbar;
