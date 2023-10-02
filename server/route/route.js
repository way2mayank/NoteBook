import express from "express";
import { register, login } from "../controller/userController.js";
import {
  addNotes,
  edit_note,
  getNotes,
  get_single_note,
  delete_note,
  single_note,
} from "../controller/noteController.js";
import { authCheck } from "../auth/authentication.js";

const router = express.Router(); // Fixed variable name

router.get('/', (req,res)=>{
  res.send("hello")
})
router.post("/register", register);
router.post("/login", login);

router.post("/add_note", authCheck, addNotes);
router.get("/notes", authCheck, getNotes);
router.get("/edit_note/:id", get_single_note);
router.put("/edit_note/:id", authCheck, edit_note);
router.delete("/delete/:id", authCheck, delete_note);
router.get("/note/:id", authCheck, single_note);

export default router;
