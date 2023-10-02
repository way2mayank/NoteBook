import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const URL = 'https://backend-g654.onrender.com'

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const res = await axios.post(`${URL}/api/v1/register`, {
        name,
        email,
        password,
      });

      if (res && res.data.success) {
        alert(res.data.message);
        navigate("/login");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Register</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label className="form-label">Name</label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label className="form-label">Email</label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Sign-Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
