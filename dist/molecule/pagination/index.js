"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var uuid_1 = require("uuid");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var button_1 = require("../../atoms/button");
var Pagination = function (_a) {
    var _b = _a.onPaginate, onPaginate = _b === void 0 ? function () { } : _b, _c = _a.currentPage, currentPage = _c === void 0 ? 1 : _c, _d = _a.limitPages, limitPages = _d === void 0 ? 5 : _d, _e = _a.pages, pages = _e === void 0 ? 1 : _e;
    var _f = (0, react_1.useState)([]), pagination = _f[0], setPagination = _f[1];
    (0, react_1.useEffect)(function () {
        var currentPagination = [];
        for (var i = 0; i < limitPages; i++) {
            currentPagination.push({
                page: currentPage + i,
                uuid: (0, uuid_1.v4)(),
            });
        }
        setPagination(currentPagination);
    }, [currentPage, limitPages, pages]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.luxPagination }, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, __assign({ onClick: function (e) { return onPaginate(currentPage - 1); }, theme: "light", disabled: currentPage === 1 }, { children: "\u00AB" })), pagination.map(function (pageInfo, i) { return ((0, jsx_runtime_1.jsx)(button_1.Button, __assign({ onClick: function (e) { return onPaginate(pageInfo.page); }, disabled: pageInfo.page > pages, theme: i === 0 ? "primary" : "light" }, { children: pageInfo.page }), pageInfo.uuid)); }), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ onClick: function (e) { return onPaginate(currentPage + 1); }, theme: "light", disabled: currentPage + 1 > pages }, { children: "\u00BB" }))] })));
};
exports.Pagination = Pagination;
