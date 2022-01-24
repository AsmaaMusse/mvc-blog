const { Router } = require("express");

const router = Router();

router.post("/blog", createBlog);
router.put("/blog/:uuid", updateBlog);
router.delete("/blog/:uuid", deleteBlog);

router.post("/blog/:uuid/comment", createComment);

module.exports = router;
