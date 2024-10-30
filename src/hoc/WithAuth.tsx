import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WithAuth = (WrappedComponent: React.FC) => {
  const Auth = (props: React.ComponentProps<typeof WrappedComponent>) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate("/");
      }
    }, [token, navigate]);
    return token ? <WrappedComponent {...props} /> : <div>Login To Access</div>;
  };

  return Auth;
};

export default WithAuth;
