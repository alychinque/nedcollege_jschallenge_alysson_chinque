const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");
// app.use(cors());

// (async () => {
//   await db.sequelize.sync();
// })();

const routes = require("./routes/index");

routes.map((x) => app.use(x.basePath, x.router));

app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
