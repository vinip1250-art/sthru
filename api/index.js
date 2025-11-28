// api/index.js
const { serveHTTP } = require("stremthru");

export default function handler(req, res) {
  serveHTTP(req, res);
}
