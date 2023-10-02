import noteModel from "./../model/noteModel.js";

export const addNotes = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(401).json({ message: "Title is required" });
    }
    if (!description) {
      return res.status(401).json({ message: "Description is Required" });
    }

    const new1 = await noteModel.create({
      title,
      description,
      user: req.user.userId,
    });
    res
      .status(201)
      .json({ success: true, message: "Notes Created Successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getNotes = async (req, res) => {
  try {
    let notes = await noteModel
      .find({ user: req.user.userId })
      .sort({ date: -1 });
    res.status(200).send({ success: true, notes });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const get_single_note = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await noteModel.findById(id);
    res.send({ success: true, note });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const edit_note = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const note = await noteModel.findById({ _id: id });

    const chanhedNote = {
      title,
      description,
    };

    await noteModel.findOneAndUpdate({ _id: id }, chanhedNote);
    res
      .status(200)
      .send({ success: true, message: "Note updated successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const delete_note = async (req, res) => {
  try {
    const id = req.params.id;
    await noteModel.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .send({ success: true, message: "note deleted successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const single_note = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await noteModel.findById(id);
    res.send({ success: true, note });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
