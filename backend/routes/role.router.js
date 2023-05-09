const express = require("express");

const router = express.Router();
const controllers = require("../controllers/role.controller");

router.get("/", controllers.index);

router.post("/", controllers.create);

router.get("/:role_id", controllers.show);

router.put("/:role_id", controllers.update);

router.delete("/:role_id", controllers.delete);

module.exports = {
  basePath: "/roles",
  router,
};
