// NotFound.tsx

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>404</h1>

            <p>
                Page not found
            </p>

            <Link to="/">
                Return Home
            </Link>
        </>
    );
};

export default NotFound;