/*
 * @Author: puxiao.wh 
 * @Date: 2017-07-23 17:05:36 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-07-25 01:13:24
 */

const userService = require('./../service/_userService.js');

var getUserinfo = (ctx, next) => {
    let query = ctx.query;
    let userId = query.id;
    let userInfo = userService.getUserById(userId);

    ctx.response.type ='application/json';
    ctx.response.body = {
        id: query.id,
        name: 'aaa'
    };
};

var saveUserinfo = (ctx, next) => {
    const requestString = ctx.data;
    //TODO数据处理
    Console.log(requestString);
};

module.exports = {
    'GET /getUserinfo': getUserinfo,
    'GET /getUserinfo.jsonp': getUserinfo,
    'POST /saveUserinfo': saveUserinfo
};