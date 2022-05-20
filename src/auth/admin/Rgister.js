import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../Auth.module.css";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";

const RgisterShop = () => {
  // const [shop, setShop] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   city: "",
  //   address: "",
  //   passcode: "",
  // });

  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [passcode, setPasscode] = useState("");

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setShop({ ...shop, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", photo, photo.name);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("city", city);
      formData.append("address", address);
      formData.append("passcode", passcode);

      console.log(photo.name);
      console.log(name);
      console.log(email);
      console.log(phone);
      console.log(city);
      console.log(address);
      console.log(passcode);
      console.log(formData);

      // const data = await fetchQuery({
      //   uri: "http://localhost:5000/api/auth/shop/register",
      //   method: "POST",
      //   body: formData,
      // });

      // localStorage.setItem("token", data.token);
      // if (formData) {
      //   console.log(formData);
      //   navigate("/auth/login-shop");
      // }

      const res = await axios.post(
        "http://localhost:5000/api/auth/shop/register",
        formData
      );
      // console.log(res);
      localStorage.setItem("token", res.token);
      if (res) {
        console.log(res);
        navigate("/auth/login-shop");
      }
    } catch (err) {
      console.error(err);
    }

    // const newShop = {
    //   name: shop.name,
    //   email: shop.email,
    //   phone: shop.phone,
    //   city: shop.city,
    //   address: shop.address,
    //   passcode: shop.passcode,
    // };
    // const data = await fetchQuery({
    //   uri: "http://localhost:5000/api/auth/shop/register",
    //   method: "POST",
    //   body: newShop,
    // });
    // localStorage.setItem("token", data.token);
    // if (newShop) {
    //   console.log(newShop);
    //   navigate("/auth/login-shop");
    // } else {
    // }
  };

  return (
    <div className={styles.auth_shopper}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <Link to="/d/services">
          <FiArrowLeft size={20} />
          <span>Dashboard</span>
        </Link>
        <h2>Create a new account</h2>
        <p>Use your email to create a new account as an Artisan</p>
        <br />
        <input
          type="file"
          name="photo"
          // value={photo}
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <input
          type="text"
          name="name"
          placeholder="Shop name"
          value={name}
          // onChange={handleChange}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          // onChange={handleChange}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone number"
          name="phone"
          value={phone}
          // onChange={handleChange}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={city}
          // onChange={handleChange}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Where is your shop located?"
          name="address"
          value={address}
          // onChange={handleChange}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="passcode"
          value={passcode}
          // onChange={handleChange}
          onChange={(e) => setPasscode(e.target.value)}
        />
        <button type="submit">Register an account</button>
        <p style={{ fontSize: "17px" }}>
          Have an account? <Link to="/auth/login-shop">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RgisterShop;
