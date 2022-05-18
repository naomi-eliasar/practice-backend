const { Router } = require("express");
const router = new Router();
const Space = require("../models").Space;

router.get("/", async (req, res, next) => {
  try {
    res.send(await Space.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
