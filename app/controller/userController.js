/*
 * @Author: puxiao.wh 
 * @Date: 2017-07-23 17:05:36 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-07-23 19:17:16
 */

const userService = require('./../service/userService.js');

var getUserinfo = (ctx, next) => {
    let query = ctx.query;
    let userId = query.id;
    let userInfo = userService.getUserById(userId);

    // let html = '<html><body>'
    //     + '<div> userinfo:&nbsp;' + userInfo + '</div>'
    //     + '</body></html>';
    ctx.response.type ='application/json';
    ctx.response.body = {
        id: query.id,
        name: 'aaa'
    };
    // return {
    //     id: query.id
    // }
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