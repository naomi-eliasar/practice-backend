const { Router } = require("express");
const router = new Router();
const Space = require("../models").Space;
const Story = require("../models").Story;

router.get("/", async (req, res, next) => {
  try {
    res.send(await Space.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const specificSpace = await Space.findByPk(req.params.id, {
      include: [{ model: Story }],
      order: [[Story, "createdAt", "DESC"]],
    });
    if (!specificSpace) {
      res.status(404).send(`Space with id ${req.params.id} not found`);
    } else {
      res.send(specificSpace);
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.delete("/story/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const storyToDelete = await Story.findByPk(id);

    if (!storyToDelete) return res.status(404).send("no story found");

    await storyToDelete.destroy();

    res.send({ message: "story deleted" });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
