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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import scss from "./styles.module.scss";
import { Button } from "../../atoms/button";
export var Pagination = function (_a) {
    var _b = _a.onPaginate, onPaginate = _b === void 0 ? function () { } : _b, _c = _a.currentPage, currentPage = _c === void 0 ? 1 : _c, _d = _a.limitPages, limitPages = _d === void 0 ? 5 : _d, _e = _a.pages, pages = _e === void 0 ? 1 : _e;
    var _f = useState([]), pagination = _f[0], setPagination = _f[1];
    useEffect(function () {
        var currentPagination = [];
        for (var i = 0; i < limitPages; i++) {
            currentPagination.push({
                page: currentPage + i,
                uuid: uuid(),
            });
        }
        setPagination(currentPagination);
    }, [currentPage, limitPages, pages]);
    return (_jsxs("div", __assign({ className: scss.luxPagination }, { children: [_jsx(Button, __assign({ onClick: function (e) { return onPaginate(currentPage - 1); }, theme: "light", disabled: currentPage === 1 }, { children: "\u00AB" })), pagination.map(function (pageInfo, i) { return (_jsx(Button, __assign({ onClick: function (e) { return onPaginate(pageInfo.page); }, disabled: pageInfo.page > pages, theme: i === 0 ? "primary" : "light" }, { children: pageInfo.page }), pageInfo.uuid)); }), _jsx(Button, __assign({ onClick: function (e) { return onPaginate(currentPage + 1); }, theme: "light", disabled: currentPage + 1 > pages }, { children: "\u00BB" }))] })));
};
