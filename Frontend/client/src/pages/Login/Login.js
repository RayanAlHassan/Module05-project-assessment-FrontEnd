import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

function Login() {
  const { setUser, user } = useContext(AuthContext); // Use the useContext hook to access setUser and state
  const navigate = useNavigate();
  const [networkError, setNetworkError] = useState(false); //network err
  const [isLoading, setIsLoading] = useState(false);
  // LOGIN form handle input change
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // login from dev
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      setNetworkError(true);
      setError(false);
      setIsLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5005/user/login",
        formData
      );
      console.log("Token:", response.headers["set-cookie"]);

      console.log(response.data);
      console.log(response);

      if (response.data) {
        setUser(response.data); // Assuming user data is nested under response.data
        console.log("role: " + response.data.role);

        if ( response.data.role === "admin") {
          navigate("/questionAnswer");
        } else {
          navigate("/");
        }
        setLoading(false);
      }
    } catch (error) {
      if (error.message === "Network request failed") {
        setNetworkError(true);
        setIsLoading(false);
      } else {
        console.log("err", error);
        setError(true);
        setErrorMessage("Invalid email or password");
        setLoading(false);
      }
    }
  };

  return (
    // <main className={style.container}>


      <main className={style.content}>
<div className={style.div}>
<form onSubmit={handleLogin} className={style.formbtnSignin}>
          <div className={style.sect}>
            <label className={style.label} htmlFor="email">
              Email
            </label>
            <input
              className={style.input}
              id="email"
              placeholder="example@gmai.com"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.sect}>
            <label
              htmlFor="password"
              className={style.label}
            >
              Password
            </label>
            <input
              className={style.input}
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <button
          type="submit"
          className={style.btnSignin}
          style={{ marginTop: "40px" }}
        >
          Sign In
        </button>
        </form>
</div>
        

    
      </main>
    // </main>
  );
}

export default Login;
