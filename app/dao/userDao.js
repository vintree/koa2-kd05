/*
 * @Author: puxiao.wh 
 * @Date: 2017-07-23 17:06:07 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-07-23 17:21:32
 */

const mysql = require('./../utils/mysqlUtil.js');

var getUserById = async (userId) => {
    console.log('dao', userId);
    // let mysqlOptions = {
    //     sql : 'select * from table_user where user_id = ?',
    //     args : [userId]
    // };

    // var users = await mysql.execQuery(mysqlOptions);
    // if(users.length == 0) {
    //     return null;
    // } else {
    //     return users;
    // }
    return null
};

module.exports = {
    getUserById : getUserById
};