const { Router } = require("express");

const {} = require("../../controllers/api/comment");

const {} = require("../../controllers/api/blog");

const router = Router();

router.post("/blog", createBlog);
router.put("/blog/:uuid", updateBlogById);
router.delete("/blog/:uuid", deleteBlogById);

router.post("/blog/:uuid/comment", createComment);
router.put("/blog/:uuid/comment/:id", updateCommentById);
router.delete("/blog/:uuid/comment/:id", deleteCommentById);

module.exports = router;
