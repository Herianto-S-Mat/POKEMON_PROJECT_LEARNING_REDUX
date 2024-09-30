"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./src/resource/data");
(0, data_1.getLists)('https://pokeapi.co/api/v2/item?limit=10')
    .then(function (data) { return console.log(data); });
