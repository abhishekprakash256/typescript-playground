"use strict";
/*
The function to make the connection with postgresql

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var pg_1 = require("pg");
var client = new pg_1.Client({
    user: 'abhi',
    host: 'host.docker.internal',
    database: 'contact',
    password: 'mypassword',
    port: 5432,
});
exports.client = client;
//console.log(client) ; 
