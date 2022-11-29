import NoteModel from "../models/NoteModel.js";

// CREATE
export const createNote = async(req, res) => {
    try {
        await NoteModel.create(req.body);
        res.json({
            "message": "Nota creada correctamente"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

// READ
export const getAllNotes = async(req, res) => {
    try {
        const notes = await NoteModel.findAll();
        res.json(notes);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getNoteById = async(req, res) => {
    try {
        const note = await NoteModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(note);
    } catch (error) {
        res.json({message: error.message});
    }
}

// UPDATE
export const updateNote = async(req, res) => {
    try {
        await NoteModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "Nota actualizada correctamente"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}