const express = require("express");
const expressHandlebars = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const path = require("path");
const routes = require("./routes");
const connection = require("./config/connection");
const helpers = require("./helpers/helpers");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

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

const hbs = expressHandlebars.create({
  helpers: helpers,
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sessionOptions));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

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
