const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

Post.belongsTo(User, {});

User.hasMany(Post, {});

Comment.belongsTo(User, {});

Comment.belongsTo(Post, {});

User.hasMany(Comment, {});

Post.hasMany(Comment, {});

module.exports = {
  Comment,
  Post,
  User,
};
