import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register.js";
import Home from "./pages/home/Home.js";
import AddNote from "./component/Add_Note.js";
import EditNote from "./component/Edit_Note.js";
// import Header from "./component/nav/header/Header.js";
import NoteDetail from "./component/NoteDetail.js";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add_note" element={<AddNote />} />
        <Route path="/edit_note/:id" element={<EditNote />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
