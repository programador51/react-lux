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
import { useState } from "react";
import { Badge } from "./atoms/badge";
import { Button } from "./atoms/button";
import { Checkbox } from "./atoms/checkbox";
import { InputFile } from "./atoms/files/single";
import { H1, H2, H3, H4, H5, H6 } from "./atoms/heading";
import { InputText } from "./atoms/inputText";
import { Password } from "./atoms/password/indext";
import { Radio } from "./atoms/radio";
import { Range } from "./atoms/range";
import { Select } from "./atoms/select";
import { Switch } from "./atoms/switch";
import useModal from "./customHooks/useModal";
import { Alert } from "./molecule/alerts";
import { BlockQuote } from "./molecule/blockquote";
import { Pagination } from "./molecule/pagination";
import { ToastProvider } from "./structure/GlobalToast";
import { Modal } from "./structure/modal";
function App() {
    var _a = useModal(), closeModal = _a.closeModal, isOpen = _a.isOpen, openModal = _a.openModal;
    var _b = useState([
        {
            value: 1,
            label: "Number 1",
        },
        {
            value: 2,
            label: "Number 2",
        },
    ]), a = _b[0], setA = _b[1];
    return (_jsx(ToastProvider, { children: _jsxs("div", __assign({ className: "App" }, { children: [_jsx(H1, { children: "Heading 1" }), _jsx(H2, { children: "Heading 2" }), _jsx(H3, { children: "Heading 3" }), _jsx(H4, { children: "Heading 4" }), _jsx(H5, { children: "Heading 5" }), _jsx(H6, { children: "Heading 6" }), _jsx(Checkbox, {}), _jsx(Switch, {}), _jsx(Range, { disabled: true }), _jsx(Pagination, { limitPages: 10, currentPage: 11, pages: 11, onPaginate: function (page) { return console.log("Get page number", page); } }), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx(Radio, {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx(InputText, { type: "tel", placeholder: "Escribe aqu\u00ED" }), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx(InputText, { type: "tel", placeholder: "Escribe aqu\u00ED", isValid: false }), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx(Password, {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx(Select, { children: a.map(function (data) { return (_jsx("option", __assign({ value: data.value }, { children: data.label }), "data-".concat(data.value))); }) }), _jsx(BlockQuote, { textAlign: "right", quote: "La sociedad hace a las personas", autor: "??" }), _jsx(Button, __assign({ onClick: openModal }, { children: "Abrir modal!" })), _jsx(Modal, __assign({ isOpen: isOpen, onClickClose: closeModal, header: function () { return _jsx("p", { children: "Title here" }); }, footer: function (_a) {
                        var triggerClose = _a.triggerClose;
                        return (_jsxs("div", { children: [_jsx(Button, __assign({ onClick: triggerClose, style: {
                                        margin: "0 10px 0 0 ",
                                    }, theme: "danger" }, { children: "Cancel" })), _jsx(Button, __assign({ onClick: triggerClose, theme: "success" }, { children: "Accept" }))] }));
                    } }, { children: function (_a) {
                        var triggerClose = _a.triggerClose;
                        return (_jsx("p", { children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ex, impedit autem molestias expedita, magni tempora culpa hic officiis voluptatum facere. Corporis unde eius ipsam dolores necessitatibus labore a enim eum autem? Assumenda, atque nostrum! Assumenda qui nulla corrupti quibusdam, obcaecati alias nisi ab atque iure sunt sit deleniti consectetur beatae dolor, similique, dolore distinctio ullam sed aperiam at nam aut. Deserunt vero voluptates ut corporis, rerum sed voluptatibus harum sint ad architecto fugiat exercitationem ipsa animi voluptate obcaecati, quae voluptas provident pariatur aliquam neque alias facilis tempora. Alias possimus quia non odio obcaecati. Esse atque alias necessitatibus iste hic." }));
                    } })), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx(InputFile, {}), _jsx(Alert, __assign({ theme: "info", title: "Recordatorio creado para 20/11/2022" }, { children: _jsx("p", __assign({ style: {
                            margin: "0",
                        } }, { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sunt inventore voluptate! Eum voluptatum ducimus atque provident quibusdam autem minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis esse possimus ab assumenda. Ad numquam nulla fuga eveniet totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae quaerat eveniet praesentium incidunt numquam vero quis dolor quo molestias culpa debitis qui odit earum error quia, fuga pariatur! Porro velit, nesciunt autem dolorem repellendus illo facilis minus, necessitatibus fugiat perferendis dolore nisi dolores rerum voluptatum. Repellendus labore provident in." })) })), _jsx(Badge, __assign({ theme: "info", rounded: true }, { children: "\uD83D\uDD14 Aviso" })), _jsx(Button, { children: "Primary" }), _jsx(Button, __assign({ theme: "secondary" }, { children: "Secondary" })), _jsx(Button, __assign({ theme: "success" }, { children: "Success" })), _jsx(Button, __assign({ theme: "info" }, { children: "Info" })), _jsx(Button, __assign({ theme: "warning" }, { children: "Warning" })), _jsx(Button, __assign({ theme: "danger" }, { children: "Danger" })), _jsx(Button, __assign({ theme: "light" }, { children: "Light" })), _jsx(Button, __assign({ theme: "dark" }, { children: "Dark" })), _jsx(Button, __assign({ theme: "link" }, { children: "Link" }))] })) }));
}
export default App;
