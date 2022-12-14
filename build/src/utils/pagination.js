"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchChapterPagination = exports.paginationFormat = exports.getPopularBooksPagination = exports.getBooksByCatePagination = exports.chapterPagination = exports.bookPagination = void 0;

var _client = require("@prisma/client");

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var paginationFormat = function paginationFormat(data, total, startIndex) {
  var page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var perPage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
  var paginationData = {
    previous: {},
    next: {},
    total: total,
    per_page: perPage,
    current_page: +page,
    result: data
  };

  if (page > 1) {
    paginationData.previous = {
      page: +page - 1
    };
  }

  if (+page * perPage - total < 0) {
    paginationData.next = {
      page: +page + 1
    };
  }

  return paginationData;
};

exports.paginationFormat = paginationFormat;

var bookPagination = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var page,
        perPage,
        order,
        sort,
        startIndex,
        totalBook,
        books,
        _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
            perPage = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10;
            order = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'desc';
            sort = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'updatedAt';
            startIndex = (page - 1) * perPage;
            _context.next = 7;
            return _models["default"].book.count();

          case 7:
            totalBook = _context.sent;
            _context.next = 10;
            return _models["default"].book.findMany({
              include: {
                categories: true,
                chapters: {
                  orderBy: {
                    chapterNumber: 'desc'
                  },
                  take: 1,
                  select: {
                    id: true,
                    title: true,
                    chapterNumber: true,
                    createdAt: true,
                    updatedAt: true,
                    bookId: true
                  }
                }
              },
              skip: startIndex,
              take: perPage,
              orderBy: _defineProperty({}, sort, order)
            });

          case 10:
            books = _context.sent;
            return _context.abrupt("return", paginationFormat(books, totalBook, startIndex, page, perPage));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function bookPagination() {
    return _ref.apply(this, arguments);
  };
}();

exports.bookPagination = bookPagination;

var chapterPagination = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(bookId) {
    var page,
        perPage,
        order,
        sort,
        startIndex,
        total,
        chapters,
        _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
            perPage = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 10;
            order = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 'asc';
            sort = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : 'chapterNumber';
            startIndex = (page - 1) * perPage;
            _context2.next = 7;
            return _models["default"].chapter.count({
              where: {
                bookId: bookId
              }
            });

          case 7:
            total = _context2.sent;
            _context2.next = 10;
            return _models["default"].chapter.findMany({
              where: {
                bookId: bookId
              },
              skip: startIndex,
              take: perPage,
              orderBy: _defineProperty({}, sort, order)
            });

          case 10:
            chapters = _context2.sent;
            return _context2.abrupt("return", paginationFormat(chapters, total, startIndex, page, perPage));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function chapterPagination(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.chapterPagination = chapterPagination;

var searchChapterPagination = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(bookId, searchKey) {
    var page,
        perPage,
        order,
        sort,
        startIndex,
        queryField,
        query,
        total,
        chapters,
        _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            page = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 1;
            perPage = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 10;
            order = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : 'asc';
            sort = _args3.length > 5 && _args3[5] !== undefined ? _args3[5] : 'chapterNumber';
            startIndex = (page - 1) * perPage;
            queryField = parseInt(searchKey) ? {
              chapterNumber: {
                equals: +searchKey
              }
            } : {
              title: {
                contains: searchKey
              }
            };
            query = _objectSpread({
              bookId: +bookId
            }, queryField);
            _context3.next = 9;
            return _models["default"].chapter.count({
              where: query
            });

          case 9:
            total = _context3.sent;
            _context3.next = 12;
            return _models["default"].chapter.findMany({
              where: query,
              skip: startIndex,
              take: perPage,
              orderBy: _defineProperty({}, sort, order)
            });

          case 12:
            chapters = _context3.sent;
            return _context3.abrupt("return", paginationFormat(chapters, total, startIndex, page, perPage));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function searchChapterPagination(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.searchChapterPagination = searchChapterPagination;

var getBooksByCatePagination = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(cateSlug) {
    var page,
        perPage,
        order,
        sort,
        startIndex,
        query,
        totalBook,
        books,
        _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            page = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 1;
            perPage = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 10;
            order = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : 'desc';
            sort = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : 'updatedAt';
            startIndex = (page - 1) * perPage;
            query = {
              categories: {
                some: {
                  slug: cateSlug
                }
              }
            };
            _context4.next = 8;
            return _models["default"].book.count({
              where: query
            });

          case 8:
            totalBook = _context4.sent;

            if (!(totalBook === 0)) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", paginationFormat([], totalBook, startIndex, page, perPage));

          case 11:
            _context4.next = 13;
            return _models["default"].book.findMany({
              where: query,
              include: {
                categories: true
              },
              orderBy: _defineProperty({}, sort, order),
              skip: startIndex,
              take: perPage
            });

          case 13:
            books = _context4.sent;
            return _context4.abrupt("return", paginationFormat(books, totalBook, startIndex, page, perPage));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getBooksByCatePagination(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getBooksByCatePagination = getBooksByCatePagination;

var getPopularBooksPagination = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var page,
        perPage,
        order,
        sort,
        _books,
        _args5 = arguments;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            page = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 1;
            perPage = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 10;
            order = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 'desc';
            sort = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : 'updatedAt';
            _context5.prev = 4;
            _context5.next = 7;
            return _models["default"].book.findMany({
              include: {
                categories: true
              },
              orderBy: {
                view: 'desc'
              },
              skip: startIndex,
              take: perPage
            });

          case 7:
            _books = _context5.sent;
            return _context5.abrupt("return", res.status(200).json(responseFormat(_books)));

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](4);
            return _context5.abrupt("return", next(createHttpError(500, _context5.t0.message)));

          case 14:
            return _context5.abrupt("return", paginationFormat(books, totalBook, startIndex, page, perPage));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 11]]);
  }));

  return function getPopularBooksPagination() {
    return _ref5.apply(this, arguments);
  };
}();

exports.getPopularBooksPagination = getPopularBooksPagination;