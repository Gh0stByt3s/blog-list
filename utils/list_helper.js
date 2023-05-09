const l_ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  if (blogs.length === 0) return 0;
  if (blogs.length === 1) return blogs.map((blog) => blog.likes).toString();
  if (blogs.length > 1) {
    const sum = blogs
      .map((blog) => blog.likes)
      .reduce((prev, curr) => prev + curr, 0);
    return sum;
  }
};

const favouriteBlog = (blogs) => {
  return blogs.reduce(
    (prev, current) => (prev.likes > current.likes ? prev : current),
    {}
  );
};

const mostLikes = (blogs) => {
  const maxObj = l_.maxBy(blogs, "likes");
  return { author: maxObj.author, likes: maxObj.likes };
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostLikes,
};
