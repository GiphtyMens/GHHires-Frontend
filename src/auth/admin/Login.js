import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../Auth.module.css";
import { FiArrowLeft } from "react-icons/fi";
import { shopUserState } from "../../store/shopStore";

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

const LoginShop = () => {
  const [state, setState] = useState({
    email: "",
    passcode: "",
  });

  const setShop = shopUserState((state) => state.setShop);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { shop } = await fetchQuery({
      uri: "https://expensive-fish-dress.cyclic.app/api/auth/shop/login",
      method: "POST",
      body: { ...state },
    });
    setShop({ shop });
    navigate("/d/default");
  };

  return (
    <div className={styles.login_shop}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <Link to="/">
          <FiArrowLeft size={20} />
          <span>Home</span>
        </Link>
        <h2>Login to your account</h2>
        <p>Use your email to login to your account</p>
        <br />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="passcode"
          value={state.passcode}
          onChange={handleChange}
        />
        <button type="submit">Log In Now</button>
        <p style={{ fontSize: "17px" }}>
          Don't have an account? <Link to="/auth/register-shop">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginShop;

// https://expensive-fish-dress.cyclic.app/api/shop
