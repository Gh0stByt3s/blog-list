const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const logger = require("../utils/logger");

blogsRouter.get("/", (request, response) => {
  Blog.find({})
    .then((blogs) => {
      response.json(blogs);
    })
    .catch((error) => logger.error("Blogs not Found", error.message));
});

// blogsRouter.get("/:id", (request, response, next) => {
//   Blog.findById(request.params.id)
//     .then((blog) => {
//       if (blog) {
//         response.json(blog);
//       } else {
//         response.status(404).end();
//       }
//     })
//     .catch((error) => logger.error("Blog not Found", error.message));
// });

blogsRouter.post("/", (request, response, next) => {
  const blog = new Blog(request.body);

  blog
    .save()
    .then((savedBlog) => {
      response.status(201).json(savedBlog);
    })
    .catch((error) => logger.error("Invalid blog post", error.message));
});

// notesRouter.delete("/:id", (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then(() => {
//       response.status(204).end();
//     })
//     .catch((error) => logger.error("Blog post not in database", error.message));
// });

// blogsRouter.put("/:id", (request, response, next) => {
//   const body = request.body;

//   const blog = {

//   };

//   Blog.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then((updatedBlog) => {
//       response.json(updatedBlog);
//     })
//     .catch((error) => logger.error("Blog post not found", error.message));
// });

module.exports = blogsRouter;
