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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var badge_1 = require("./atoms/badge");
var button_1 = require("./atoms/button");
var checkbox_1 = require("./atoms/checkbox");
var single_1 = require("./atoms/files/single");
var heading_1 = require("./atoms/heading");
var inputText_1 = require("./atoms/inputText");
var indext_1 = require("./atoms/password/indext");
var radio_1 = require("./atoms/radio");
var range_1 = require("./atoms/range");
var select_1 = require("./atoms/select");
var switch_1 = require("./atoms/switch");
var useModal_1 = __importDefault(require("./customHooks/useModal"));
var alerts_1 = require("./molecule/alerts");
var blockquote_1 = require("./molecule/blockquote");
var pagination_1 = require("./molecule/pagination");
var GlobalToast_1 = require("./structure/GlobalToast");
var modal_1 = require("./structure/modal");
function App() {
    var _a = (0, useModal_1.default)(), closeModal = _a.closeModal, isOpen = _a.isOpen, openModal = _a.openModal;
    var _b = (0, react_1.useState)([
        {
            value: 1,
            label: "Number 1",
        },
        {
            value: 2,
            label: "Number 2",
        },
    ]), a = _b[0], setA = _b[1];
    return ((0, jsx_runtime_1.jsx)(GlobalToast_1.ToastProvider, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)(heading_1.H1, { children: "Heading 1" }), (0, jsx_runtime_1.jsx)(heading_1.H2, { children: "Heading 2" }), (0, jsx_runtime_1.jsx)(heading_1.H3, { children: "Heading 3" }), (0, jsx_runtime_1.jsx)(heading_1.H4, { children: "Heading 4" }), (0, jsx_runtime_1.jsx)(heading_1.H5, { children: "Heading 5" }), (0, jsx_runtime_1.jsx)(heading_1.H6, { children: "Heading 6" }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, {}), (0, jsx_runtime_1.jsx)(switch_1.Switch, {}), (0, jsx_runtime_1.jsx)(range_1.Range, { disabled: true }), (0, jsx_runtime_1.jsx)(pagination_1.Pagination, { limitPages: 10, currentPage: 11, pages: 11, onPaginate: function (page) { return console.log("Get page number", page); } }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(radio_1.Radio, {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(inputText_1.InputText, { type: "tel", placeholder: "Escribe aqu\u00ED" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(inputText_1.InputText, { type: "tel", placeholder: "Escribe aqu\u00ED", isValid: false }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(indext_1.Password, {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(select_1.Select, { children: a.map(function (data) { return ((0, jsx_runtime_1.jsx)("option", __assign({ value: data.value }, { children: data.label }), "data-".concat(data.value))); }) }), (0, jsx_runtime_1.jsx)(blockquote_1.BlockQuote, { textAlign: "right", quote: "La sociedad hace a las personas", autor: "??" }), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ onClick: openModal }, { children: "Abrir modal!" })), (0, jsx_runtime_1.jsx)(modal_1.Modal, __assign({ isOpen: isOpen, onClickClose: closeModal, header: function () { return (0, jsx_runtime_1.jsx)("p", { children: "Title here" }); }, footer: function (_a) {
                        var triggerClose = _a.triggerClose;
                        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(button_1.Button, __assign({ onClick: triggerClose, style: {
                                        margin: "0 10px 0 0 ",
                                    }, theme: "danger" }, { children: "Cancel" })), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ onClick: triggerClose, theme: "success" }, { children: "Accept" }))] }));
                    } }, { children: function (_a) {
                        var triggerClose = _a.triggerClose;
                        return ((0, jsx_runtime_1.jsx)("p", { children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ex, impedit autem molestias expedita, magni tempora culpa hic officiis voluptatum facere. Corporis unde eius ipsam dolores necessitatibus labore a enim eum autem? Assumenda, atque nostrum! Assumenda qui nulla corrupti quibusdam, obcaecati alias nisi ab atque iure sunt sit deleniti consectetur beatae dolor, similique, dolore distinctio ullam sed aperiam at nam aut. Deserunt vero voluptates ut corporis, rerum sed voluptatibus harum sint ad architecto fugiat exercitationem ipsa animi voluptate obcaecati, quae voluptas provident pariatur aliquam neque alias facilis tempora. Alias possimus quia non odio obcaecati. Esse atque alias necessitatibus iste hic." }));
                    } })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(single_1.InputFile, {}), (0, jsx_runtime_1.jsx)(alerts_1.Alert, __assign({ theme: "info", title: "Recordatorio creado para 20/11/2022" }, { children: (0, jsx_runtime_1.jsx)("p", __assign({ style: {
                            margin: "0",
                        } }, { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sunt inventore voluptate! Eum voluptatum ducimus atque provident quibusdam autem minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis esse possimus ab assumenda. Ad numquam nulla fuga eveniet totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae quaerat eveniet praesentium incidunt numquam vero quis dolor quo molestias culpa debitis qui odit earum error quia, fuga pariatur! Porro velit, nesciunt autem dolorem repellendus illo facilis minus, necessitatibus fugiat perferendis dolore nisi dolores rerum voluptatum. Repellendus labore provident in." })) })), (0, jsx_runtime_1.jsx)(badge_1.Badge, __assign({ theme: "info", rounded: true }, { children: "\uD83D\uDD14 Aviso" })), (0, jsx_runtime_1.jsx)(button_1.Button, { children: "Primary" }), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ theme: "secondary" }, { children: "Secondary" })), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ theme: "success" }, { children: "Success" })), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ theme: "info" }, { children: "Info" })), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ theme: "warning" }, { children: "Warning" })), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ theme: "danger" }, { children: "Danger" })), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ theme: "light" }, { children: "Light" })), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ theme: "dark" }, { children: "Dark" })), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ theme: "link" }, { children: "Link" }))] })) }));
}
exports.default = App;
