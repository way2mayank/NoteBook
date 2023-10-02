import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [result, setResult] = useState([]);
  let token = Cookies.get("token");
  const navigate = useNavigate();
const URL = "https://backend-g654.onrender.com"


  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      data();
    }
  }, [token, navigate]);

  const data = async () => {
    const res = await axios.get(`${URL}/api/v1/notes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setResult(res.data.notes);
    console.log(res.data.notes);
  };

  const deleteProduct = async (id) => {
    const res = await axios.delete(
      `${URL}/api/v1/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res) {
      data();
    }
  };

  return (
    <>
      <Link to="/add_note" className="btn btn-primary">
        Add Note+
      </Link>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Sr.No</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {result.length > 0 ? (
            result.map((ele, index) => {
              return (
                <tr>
                  <td>
                    <p className="fw-normal mb-1">{index + 1}</p>
                  </td>
                  <td>
                    <Link to={`/note/${ele._id}`}>
                      <p className="fw-bold mb-1 btn btn-link btn-sm btn-rounded">
                        {ele.title}
                      </p>
                    </Link>
                  </td>
                  <td>
                    <Link
                      type="button"
                      className="fw-bold btn btn-link btn-sm btn-rounded"
                      to={"/edit_note/" + ele._id}
                    >
                      EDIT
                    </Link>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="fw-bold btn btn-link btn-sm btn-rounded"
                      onClick={() => deleteProduct(ele._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h1 className="nodata">No result found</h1>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Home;
