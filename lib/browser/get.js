var Boom = require('boom')
var Promise = require('bluebird')
var request = require('reqwest')

var TIMEOUT = 5e3

module.exports = get

function get(url) {
    return new Promise(function(resolve, reject){
        request({
            url: url,
            crossOrigin: true,
            timeout: TIMEOUT,
            success: function (data) {
                return resolve(data['with'])
            },
            error: function (xhr) {
                var error
                try {
                    error = Boom.create(xhr.status, JSON.parse(xhr.response)['because'])
                } catch (ex) {
                    return reject(ex)
                }
                return reject(error)
            }
        })
    })
}
