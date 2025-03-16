"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNote = void 0;
const validateNote = (req, res, next) => {
    const note = req.body;
    if (!note.title || !note.content || !note.category) {
        return res.status(400).json({ error: 'Invalid note format' });
    }
    next();
};
exports.validateNote = validateNote;
