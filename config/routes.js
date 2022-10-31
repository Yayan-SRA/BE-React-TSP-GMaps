const express = require("express");
const controllers = require("../app/controllers");

const router = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
router.get("/api/v1/algen/list", controllers.api.v1.algenController.list);
router.post("/api/v1/algen/create", controllers.api.v1.algenController.create);
router.put("/api/v1/algen/update/:id", controllers.api.v1.algenController.update);
router.get("/api/v1/algen/show/:id", controllers.api.v1.algenController.show);
router.delete(
  "/api/v1/algen/delete/:id",
  controllers.api.v1.algenController.destroy
);
router.get('/', controllers.api.v1.algenController.handleGetRoot)

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
router.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

router.use(controllers.api.main.onLost);
router.use(controllers.api.main.onError);

module.exports = router;
