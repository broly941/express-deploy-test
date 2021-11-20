"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 80;
app.listen(PORT, function () {
    console.log("Server has been started...");
});
