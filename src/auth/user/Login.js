import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../Auth.module.css";
// import { FiArrowLeft } from "react-icons/fi";
import { useUserState } from "../../store/userStore";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const setUser = useUserState((state) => state.setUser);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = await fetchQuery({
      uri: "https://expensive-fish-dress.cyclic.app/api/auth/user/login",
      method: "POST",
      body: { ...state },
    });
    setUser({ user });
    navigate("/shops");
  };

  return (
    <div className={styles.login_shop}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        {/* <Link to="/">
          <FiArrowLeft size={20} />
          <span>Back to services</span>
        </Link> */}
        <h2>Login to your account</h2>
        <p>Use your email to login to your account</p>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <p style={{ fontSize: "17px" }}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
