const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user });
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;

  const note = await Note.create({
    title,
    content,
    user: req.user
  });

  res.json(note);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).json({ message: "Note not found" });

  if (note.user.toString() !== req.user)
    return res.status(401).json({ message: "Not authorized" });

  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedNote);
};

exports.deleteNote = async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).json({ message: "Note not found" });

  if (note.user.toString() !== req.user)
    return res.status(401).json({ message: "Not authorized" });

  await note.deleteOne();

  res.json({ message: "Note deleted" });
};