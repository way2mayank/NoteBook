import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Edit_Note = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const Navigate = useNavigate();
  const URL = "https://backend-g654.onrender.com"
  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    let res = await axios.get(
      `${URL}/api/v1/edit_note/${params.id}`
    );
    setTitle(res.data.note.title);
    setDescription(res.data.note.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(params);
    let token = Cookies.get("token");
    const res = await axios.put(
      `${URL}/api/v1/edit_note/${params.id}`,
      {
        title,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
                <h3 className="mb-5">EDIT NOTE</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Title"
                      value={title}
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
                      value={description}
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

export default Edit_Note;
