import express from "express";
import { getAllNotes, getNoteById, createNote, updateNote } from "../controllers/NoteController.js";
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);

export default router;