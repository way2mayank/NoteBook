import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./NoteDetails.css"

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const URL = "https://backend-g654.onrender.com"

  useEffect(() => {
    fetchNote();
  }, [id]);

  const fetchNote = async () => {
    const token = Cookies.get("token");
    try {
      const res = await axios.get(`${URL}/api/v1/note/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNote(res.data.note);
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  };

  return (
    <div>
      {note ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="card "
            style={{ minHeight: "300px", minWidth: "300px" , maxWidth:"600px"}}
          >
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <h3 className="card-subtitle m-2 text-muted">Descriptions</h3>
              <p className="card-text">{note.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default NoteDetail;
