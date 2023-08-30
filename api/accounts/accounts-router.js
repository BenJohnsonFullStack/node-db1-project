const router = require("express").Router();

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  // DO YOUR MAGIC
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = router;
