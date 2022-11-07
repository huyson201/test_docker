"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _auth = _interopRequireDefault(require("../../controllers/auth.controller"));

var _auth2 = _interopRequireDefault(require("../../middlewares/auth.middleware"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = require('express').Router();

route.post('/login', _auth["default"].login);
route.post('/register', _auth2["default"], _auth["default"].register);
route.post('/logout', _auth["default"].logout);
route.post('/refresh-token', _auth["default"].refreshToken);
route.get('/me', _passport["default"].authenticate('jwt', {
  session: false
}), function (req, res) {
  return res.status(200).json((0, _utils.responseFormat)(req.user));
});
route.get('/me/bookcase', _passport["default"].authenticate('jwt', {
  session: false
}), _auth["default"].getBookcase);
route["delete"]('/me/bookcase/delete', _passport["default"].authenticate('jwt', {
  session: false
}), _auth["default"].deleteBookcaseById);
route.post('/me/bookcase/add', _passport["default"].authenticate('jwt', {
  session: false
}), _auth["default"].addBookcase);
route.get('/me/bookcase/find/:book_id', _passport["default"].authenticate('jwt', {
  session: false
}), _auth["default"].getBookcaseById);
route.post('/me/update/name', _passport["default"].authenticate('jwt', {
  session: false
}), _auth["default"].updateUsername);
route.post('/me/update/password', _passport["default"].authenticate('jwt', {
  session: false
}), _auth["default"].getBookcase);
var _default = route;
exports["default"] = _default;