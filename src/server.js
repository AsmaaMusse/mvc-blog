require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const req = require("express/lib/request");
// const sequelizeStore = require("connect-session-sequelize")(session.Store);
const session = require("express-session");
const path = require("path");

const routes = require("./routes");
const connection = require("./config/connection");

const PORT = process.env.PORT || 4000;

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 86400 * 1000,
  },

  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: connection,
  }),
};

const hbs = expressHandlebars.create({});
const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sessionOptions));
app.use("express.json()");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });
    console.log("[INFO]: DB connection successful");

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: DB connection failed | ${error.message}`);
  }
};

init();
