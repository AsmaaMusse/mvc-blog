const commentBlog = (req, res) => {
  res.json({ message: "comment on blog" });
};

const updateBlog = (req, res) => {
  res.json({ message: "update comment on blog" });
};

const deleteBlog = (req, res) => {
  res.json({ message: "delete comment on blog" });
};

module.exports = {
  commentBlog,
  updateBlog,
  deleteBlog,
};
