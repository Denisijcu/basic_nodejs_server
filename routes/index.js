const postJSON = require('../posts.json');

exports.test = (req, res) => {
  res.render('test', {
    title: "This is a Test",
  });
}

exports.home = (req, res) => {
  const posts = postJSON.posts;
  res.render('home', {
    title: "Posts",
    posts
  });
}