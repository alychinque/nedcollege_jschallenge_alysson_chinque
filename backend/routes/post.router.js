const express = require("express");

const router = express.Router();
const controllers = require("../controllers/post.controller");

router.get("/", controllers.index);

router.post("/", controllers.create);

router.get("/:post_id", controllers.show);

router.put("/:post_id", controllers.update);

router.delete("/:post_id", controllers.delete);

module.exports = {
  basePath: "/posts",
  router,
};
