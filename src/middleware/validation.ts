import { Request, Response, NextFunction } from 'express';
import { Note } from '../interfaces/note';

export const validateNote = (req: Request, res: Response, next: NextFunction) => {
  const note: Note = req.body;
  if (!note.title || !note.content || !note.category) {
    return res.status(400).json({ error: 'Invalid note format' });
  }
  next();
};