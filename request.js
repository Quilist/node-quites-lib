const request = require('request');
class Requests {
    constructor() {
        this.api = 'http://quites.site/';
    }

    async request(url) {
        return new Promise((resolve, reject) => {
            request.get(this.api + url, (error, response, body) => {
                if (error) reject(error);
                else resolve(JSON.parse(body));
            });
        });
    }
}

module.exports = Requests;