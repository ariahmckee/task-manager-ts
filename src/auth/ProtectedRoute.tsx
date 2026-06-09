import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
    children: JSX.Element;
}

const ProtectedRoute = ({
    children,
}: Props) => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated
        ? children
        : <Navigate to="/login" />;
};

export default ProtectedRoute;
