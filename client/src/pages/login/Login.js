import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import Layout from "../../component/nav/layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const URL = "https://backend-g654.onrender.com";

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/api/v1/login`, {
        email,
        password,
      });

      console.log(res);

      if (res && res.data.success) {
        alert(res.data.message);
        Cookies.set("token", res.data.token, { expires: 7 });
        navigate("/");
      } else {
        alert("Please check your Email and Password");
      }
    } catch (error) {
      console.log(error.message);
      alert("Please check your Email and Password");
    }
  };

  return (
    <Layout title="Login_Page">
      <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  <form onSubmit={handleForm}>
                    <div className="form-outline mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label>Email</label>
                    </div>

                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <label>Password</label>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>

                  <div>
                    <p className="mb-1">
                      Don't have an account?
                      <Link to="/register" className="text-blue-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
