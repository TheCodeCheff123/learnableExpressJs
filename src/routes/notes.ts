import express from 'express';
import { Note } from '../interfaces/note';
import { validateNote } from '../middleware/validation';
import { logger } from '../middleware/logging';

const router = express.Router();
const notes: Note[] = [];

// Get notes by category ID
router.get('/categories/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const filteredNotes = notes.filter(note => note.category.id === categoryId);
  res.json(filteredNotes);
});

// Update a note
router.put('/:id', validateNote, (req, res) => {
  const noteId = req.params.id;
  const updatedNote: Note = req.body;
  const index = notes.findIndex(note => note.id === noteId);
  if (index === -1) {
    return res.status(404).json({ error: 'Note not found' });
  }
  notes[index] = updatedNote;
  res.json(updatedNote);
});

export default router;