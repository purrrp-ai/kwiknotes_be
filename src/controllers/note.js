import { Router } from "express";
import pkg from "jsonwebtoken";
import { User } from "../models/user-schema.js";
import { FAIRY } from "../utils/config.js";

const { verify } = pkg;

const NotesRouter = Router();

NotesRouter.get("/", async (request, response) => {
  const token = request.headers.authorization,
    decodedToken = verify(token, FAIRY);
  const user = await User.findById(decodedToken.sub);
  if (!user)
    return response
      .status(400)
      .json({ message: "Oops! something went wrong." });

  const notes = [...user.notes];

  return response.json({ notes });
});

NotesRouter.post("/create", async (request, response) => {
  const token = request.headers.authorization;
  const { title, content, pinned, stashed, binned, prompt } = request.body;

  const decodedToken = verify(token, FAIRY);
  const user = await User.findById(decodedToken.sub);

  if (!user)
    return response
      .status(401)
      .json({ message: "Oops! your note couldn't be saved." });

  const note = {
    title: title,
    content: content,
    pinned: pinned || false,
    stashed: stashed || false,
    binned: binned || false,
    prompt: {
      date: prompt?.date || undefined,
      time: prompt?.time || undefined,
      repeat: prompt?.repeat || undefined,
    },
  };

  user.notes.push(note);
  await user.save();

  return response.status(201).json(note);
});

NotesRouter.put("/update/:id", async (request, response) => {
  const token = request.headers.authorization,
    { title, content, pinned, stashed, binned, prompt } = request.body;
  const decodedToken = verify(token, FAIRY);
  const userId = decodedToken.sub;

  const user = await User.findById(userId);
  if (!user) return response.status(401).json({ message: "User not found." });

  const noteId = request.params.id;
  const note = user.notes.find((note) => note._id.toString() === noteId);
  if (!note) return response.status(404).json({ message: "Note not found." });

  // Update the note properties based on the request body
  note.title = title || note.title;
  note.content = content || note.content;

  // Handle pinning logic
  if (pinned === true) {
    // If the note is currently stashed, revert the stashed state to false
    if (note.stashed) note.stashed = false;
    note.pinned = true;
  } else if (pinned === false) note.pinned = false;

  // Handle stashing logic
  if (stashed === true) {
    // If the note is currently pinned, revert the pinned state to false
    if (note.pinned) note.pinned = false;
    note.stashed = true;
  } else if (stashed === false) note.stashed = false;

  // Handle binning logic
  if (binned === true) {
    // If the note is currently pinned or stashed, revert the pinned/stashed state to false
    if (note.pinned) note.pinned = false;
    if (note.stashed) note.stashed = false;
    note.binned = true;
  } else if (binned === false) note.binned = false;

  // Validate and update the prompt
  if (prompt) {
    const { date, time, repeat } = prompt;

    // Validate date
    const currentDate = new Date().toISOString().split("T")[0];
    if (date < currentDate)
      return response
        .status(400)
        .json({ message: "Date cannot be before today." });

    // Validate time
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (date === currentDate && time <= currentTime)
      return response
        .status(400)
        .json({ message: "Time cannot be now or in the past." });

    note.prompt = { date, time, repeat };
  }

  await user.save();

  return response.status(200).json(note);
});

NotesRouter.delete("/delete/:id", async (request, response) => {
  const token = request.headers.authorization;

  const decodedToken = verify(token, FAIRY);
  const user = await User.findById(decodedToken.sub);

  if (!user)
    return response
      .status(401)
      .json({ message: "Yikes! Something went wrong." });

  const noteIndex = user.notes.findIndex(
    (note) => note._id.toString() === request.params.id
  );

  if (noteIndex === -1)
    return response.status(404).json({ message: "Note not found." });

  user.notes.splice(noteIndex, 1);

  await user.save();

  return response.status(200).json({ message: "Note deleted successfully." });
});

export default NotesRouter;
