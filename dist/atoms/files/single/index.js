import { jsx as _jsx } from "react/jsx-runtime";
import scss from "./styles.module.scss";
export var InputFile = function () {
    return _jsx("input", { type: "file", className: scss.luxSingleFile, multiple: true });
};
