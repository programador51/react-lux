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
import scss from "./styles.module.scss";
export var BlockQuote = function (_a) {
    var quote = _a.quote, autor = _a.autor, _b = _a.textAlign, textAlign = _b === void 0 ? "left" : _b;
    return (_jsxs("figure", __assign({ className: scss.containerQuote }, { children: [_jsx("blockquote", __assign({ style: {
                    margin: 0,
                    textAlign: textAlign,
                } }, { children: _jsx("p", __assign({ className: scss.blockquote }, { children: quote })) })), _jsx("figcaption", __assign({ className: scss.blockquoteCaption, style: {
                    textAlign: textAlign,
                } }, { children: autor }))] })));
};
