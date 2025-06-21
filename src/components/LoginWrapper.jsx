import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function LoginWrapper() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/orders"); // Redirect on successful login
  };

  return <Login onLogin={handleLogin} />;
}

export default LoginWrapper;
