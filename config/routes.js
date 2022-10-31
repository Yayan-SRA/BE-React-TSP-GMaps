const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.get("/api/v1/algen/list", controllers.api.v1.algenController.list);
apiRouter.post("/api/v1/algen/create", controllers.api.v1.algenController.create);
apiRouter.put("/api/v1/algen/update/:id", controllers.api.v1.algenController.update);
apiRouter.get("/api/v1/algen/show/:id", controllers.api.v1.algenController.show);
apiRouter.delete(
  "/api/v1/algen/delete/:id",
  controllers.api.v1.algenController.destroy
);
router.get('/', controllers.api.v1.algenController.handleGetRoot)

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
