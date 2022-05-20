import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../Auth.module.css";

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

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCustomer = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      city: user.city,
      address: user.address,
      password: user.password,
    };

    const data = await fetchQuery({
      uri: "https://expensive-fish-dress.cyclic.app/api/auth/user/register",
      method: "POST",
      body: newCustomer,
    });

    localStorage.setItem("token", data.token);
    if (newCustomer) {
      console.log(newCustomer);
      navigate("/login");
    }
  };

  return (
    <div className={styles.register_shop}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        {/* <Link to="/d/services">
          <FiArrowLeft size={20} />
          <span></span>
        </Link> */}
        <h2>Create a new account</h2>
        <p>Use your email to create a new account</p>
        <br />
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Phone number"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={user.city}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="address"
          value={user.address}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Register an account</button>
        <p style={{ fontSize: "17px" }}>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
