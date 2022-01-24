const Comment = require("./Comment");
const Blog = require("./Blog");
const User = require("./User");

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "Cascade",
});

User.hasMany(Blog, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "Cascade",
});

Comment.belongsTo(Blog, {
  foreignKey: "post_id",
  onDelete: "Cascade",
});

User.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "Cascade",
});

Blog.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = {
  Comment,
  Blog,
  User,
};
