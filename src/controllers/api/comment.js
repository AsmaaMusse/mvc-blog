const createComment = (req, res) => {
  res.json({ message: "comment on blog" });
};

const updateCommentById = (req, res) => {
  res.json({ message: "update comment on blog by Id" });
};

const deleteCommentById = (req, res) => {
  res.json({ message: "delete comment on blog by Id" });
};

module.exports = {
  createComment,
  updateCommentById,
  deleteCommentById,
};
