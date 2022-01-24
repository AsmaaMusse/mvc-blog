const { Blog } = require("../../models");

const renderHomePage = async (req, res) => {};

const renderLoginPage = async (req, res) => {
  res.render("login");
};

const renderSignUpPage = async (req, res) => {
  res.render("signup");
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
};
