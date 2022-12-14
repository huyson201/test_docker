"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRefreshToken = exports.generateAccessToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateAccessToken = function generateAccessToken(payload) {
  var token = _jsonwebtoken["default"].sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '2h'
  });

  return token;
};

exports.generateAccessToken = generateAccessToken;

var generateRefreshToken = function generateRefreshToken(payload) {
  var token = _jsonwebtoken["default"].sign(payload, process.env.REFRESH_TOKEN_SECRET);

  return token;
};

exports.generateRefreshToken = generateRefreshToken;