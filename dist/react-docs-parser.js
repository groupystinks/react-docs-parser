'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _reactDocgen = require('react-docgen');

var parser = _interopRequireWildcard(_reactDocgen);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function parse(source) {
  var docsData = undefined;

  var data = _fs2['default'].readFileSync(source, 'utf8');

  docsData = new Promise(function (resolve, reject) {
    resolve(parser.parse(data));
  });

  return docsData;
}

exports.parse = parse;