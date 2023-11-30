const express = require("express");
const routerApp = express.Router();

const appVector = require("../apps/vector/controller/ctlVector");

routerApp.post("/sort", appVector.sort);
routerApp.post("/minmax", appVector.minmax);

module.exports = routerApp;
