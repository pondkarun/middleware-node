const authenticateToken = require('./middleware/authenticateToken');
const trimBodyString = require('/middleware/trimBodyString');

module.exports = {
  authenticateToken,
  trimBodyString,
}