/*
 * @Author: puxiao.wh 
 * @Date: 2017-07-23 17:02:49 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-07-23 19:14:39
 */

const Koa = require('koa');
const app = new Koa();
const router = require('./app/router.js');
const config = require('./config/config.local.js');
const jsonp = require('koa-jsonp')

app.use(jsonp());
app.use(router());
app.listen(config.port);
console.log("Server started and listen on port " + config.port);
