/*
 * @Author: puxiao.wh 
 * @Date: 2017-07-23 17:02:49 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-07-24 14:06:37
 */

const Koa = require('koa');
const app = new Koa();
const router = require('./app/router.js');
const config = require('./config/config.local.js');
const jsonp = require('koa-jsonp');
const enforceHttps = require('koa-sslify');
const fs = require('fs');
const http = require('http');
const https = require('https');

app.use(enforceHttps());
app.use(jsonp());
app.use(router());

var options = {
    key: fs.readFileSync('./ssl/server.key'),  //ssl文件路径
    cert: fs.readFileSync('./ssl/server.pem')  //ssl文件路径
};
// app.listen(config.port);

// start the server
http.createServer(app.callback()).listen(config.port);
https.createServer(options, app.callback()).listen(443);

console.log("Server started and listen on port 127.0.0.1:" + config.port);
console.log("Server started and listen on port 127.0.0.1:443" );
