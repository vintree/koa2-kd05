/*
 * @Author: puxiao.wh 
 * @Date: 2017-07-23 17:05:52 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-07-25 01:13:29
 */

const userDao = require('./../dao/userDao.js');

var getUserById = async (userId) => {
    var users = userDao.getUserById(userId);
    var responseContent = '';
    for(let user of users) {
        reaponseContent += '姓名：' + user.name + '&nbsp;|';
        reaponseContent += '年龄：' + user.age + '&nbsp;|';
        reaponseContent += '身高：' + user.height + '<br />';
    }
    return responseContent;
}

module.exports = {
    getUserById : getUserById
};