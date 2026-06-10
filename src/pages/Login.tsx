import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const {
    loginWithRedirect,
  } = useAuth0();

  return (
    <>
      <h1>Task Manager</h1>

      <button
        onClick={() =>
          loginWithRedirect()
        }
      >
        Login
      </button>
    </>
  );
};

export default Login;
