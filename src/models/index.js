const Comment = require("./Comment");
const Blog = require("./Blog");
const User = require("./User");

Blog.belongsTo(User, {});

User.hasMany(Blog, {});

Comment.belongsTo(User, {});

Comment.belongsTo(Blog, {});

User.hasMany(Comment, {});

Blog.hasMany(Comment, {});

module.exports = {
  Comment,
  Blog,
  User,
};
