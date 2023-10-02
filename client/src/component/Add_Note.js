import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Add_Note = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let token = Cookies.get("token");
    const URL = "https://backend-g654.onrender.com"
    const res = await axios.post(
      `${URL}/api/v1/add_note`,
      {
        title,
        description
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);

    try {
      if (res) {
        alert(res.data.message);
        Navigate("/");
      } else {
        alert("Somthing went wrong");
      }
    } catch (error) {
      return alert(error.message);
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
                <h3 className="mb-5">ADD NEW NOTE</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <textarea
                      className="form-control"
                      id="textAreaExample"
                      rows="8"
                      placeholder="Descriptions"
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Save
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

export default Add_Note;
