import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const ProtectedRoute = ({
    children,
}: Props) => {
    const { 
        isAuthenticated,
        isLoading, 
    } = useAuth0();

    if (isLoading) {
        return <p>Loadin...</p>
    }

    return isAuthenticated
        ? children
        : <Navigate to="/login" />;
};

export default ProtectedRoute;
