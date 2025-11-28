const { serveHTTP } = require("stremthru");

module.exports = (req, res) => {
  serveHTTP(req, res);
};
