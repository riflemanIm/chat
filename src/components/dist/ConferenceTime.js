"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var ContactStatus = function (_a) {
    var currentDate = _a.currentDate, finishDate = _a.finishDate;
    //const { t } = useTranslation();
    var currTime = new Date(currentDate).getTime();
    var finTime = new Date(finishDate).getTime();
    console.log(currentDate, "\n", finishDate);
    var diffTimeMin = Math.round((finTime - currTime) / (1000 * 60));
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "textSecondary", component: "span" }, diffTimeMin)));
};
exports["default"] = ContactStatus;
