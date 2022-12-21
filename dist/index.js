"use strict";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./global.scss";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = exports.ToastProvider = exports.useModal = exports.Pagination = exports.Modal = exports.InputText = exports.BlockQuote = exports.Radio = exports.Range = exports.Select = exports.Password = exports.Switch = exports.Checkbox = exports.InputFile = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Badge = exports.Button = void 0;
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
var button_1 = require("./atoms/button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return button_1.Button; } });
var badge_1 = require("./atoms/badge");
Object.defineProperty(exports, "Badge", { enumerable: true, get: function () { return badge_1.Badge; } });
var heading_1 = require("./atoms/heading");
Object.defineProperty(exports, "H1", { enumerable: true, get: function () { return heading_1.H1; } });
Object.defineProperty(exports, "H2", { enumerable: true, get: function () { return heading_1.H2; } });
Object.defineProperty(exports, "H3", { enumerable: true, get: function () { return heading_1.H3; } });
Object.defineProperty(exports, "H4", { enumerable: true, get: function () { return heading_1.H4; } });
Object.defineProperty(exports, "H5", { enumerable: true, get: function () { return heading_1.H5; } });
Object.defineProperty(exports, "H6", { enumerable: true, get: function () { return heading_1.H6; } });
var single_1 = require("./atoms/files/single");
Object.defineProperty(exports, "InputFile", { enumerable: true, get: function () { return single_1.InputFile; } });
var checkbox_1 = require("./atoms/checkbox");
Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function () { return checkbox_1.Checkbox; } });
var switch_1 = require("./atoms/switch");
Object.defineProperty(exports, "Switch", { enumerable: true, get: function () { return switch_1.Switch; } });
var indext_1 = require("./atoms/password/indext");
Object.defineProperty(exports, "Password", { enumerable: true, get: function () { return indext_1.Password; } });
var select_1 = require("./atoms/select");
Object.defineProperty(exports, "Select", { enumerable: true, get: function () { return select_1.Select; } });
var range_1 = require("./atoms/range");
Object.defineProperty(exports, "Range", { enumerable: true, get: function () { return range_1.Range; } });
var radio_1 = require("./atoms/radio");
Object.defineProperty(exports, "Radio", { enumerable: true, get: function () { return radio_1.Radio; } });
var inputText_1 = require("./atoms/inputText");
Object.defineProperty(exports, "InputText", { enumerable: true, get: function () { return inputText_1.InputText; } });
var modal_1 = require("./structure/modal");
Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return modal_1.Modal; } });
var useModal_1 = __importDefault(require("./customHooks/useModal"));
exports.useModal = useModal_1.default;
var GlobalToast_1 = require("./structure/GlobalToast");
Object.defineProperty(exports, "ToastProvider", { enumerable: true, get: function () { return GlobalToast_1.ToastProvider; } });
var blockquote_1 = require("./molecule/blockquote");
Object.defineProperty(exports, "BlockQuote", { enumerable: true, get: function () { return blockquote_1.BlockQuote; } });
var pagination_1 = require("./molecule/pagination");
Object.defineProperty(exports, "Pagination", { enumerable: true, get: function () { return pagination_1.Pagination; } });
var alerts_1 = require("./molecule/alerts");
Object.defineProperty(exports, "Alert", { enumerable: true, get: function () { return alerts_1.Alert; } });
