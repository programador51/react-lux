"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputFile = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var InputFile = function () {
    return (0, jsx_runtime_1.jsx)("input", { type: "file", className: styles_module_scss_1.default.luxSingleFile, multiple: true });
};
exports.InputFile = InputFile;
