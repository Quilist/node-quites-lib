const Requests = require("./request");

class Quites extends Requests {

    async getQuotes(param) {
        return this.request(`quotes?cryptocurrency=${param}`);
    }

    async convert(from, to, amount = 1) {
        return this.request(`convert?from=${from}&to=${to}&amount=${amount}`);
    }

    async getList(pair = '', above = '', below = '') {
        return this.request(`getlist?pair=${pair}&above=${above}&below=${below}`);
    }
}

module.exports = Quites;