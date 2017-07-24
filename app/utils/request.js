const urlx = require('urlx')
const fetch = require('node-fetch')

exports.get = async(url, params) => {
    if(!!params) {
        url = `${url}${urlx.stringify(params)}`
    }
    console.log('url', url);
    const res = await fetch(url)
    const body = await res.json()
    return body
}