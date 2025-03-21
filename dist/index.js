"use strict";
// testing if my code is working
/*
var daniel : string = " daniel"

console.log(daniel);
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_1 = __importDefault(require("./routes/notes"));
const logging_1 = require("./middleware/logging");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(logging_1.logger);
app.use('/api/notes', notes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
