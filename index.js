const Requests = require("./request/request");
const events_1 = require("./events/events");

class Quites extends Requests {

    async getQuotes(...param) {
        return this.request(`quotes?cryptocurrency=${param}`);
    }

    async convert(param = { from: String, to: String, amount: Number }) {
        return this.request(`convert?from=${param.from}&to=${param.to}&amount=${param.amount}`);
    }

    async getList(param = { above: Number, below: Number }) {
        return this.request(`get-list?above=${param.above}&below=${param.below}`);
    }

    async on(event = String, callback) {
        if (this.event_handler === undefined) {
            this.event_handler = new events_1.default(this);
        }
        this.event_handler.on(event, callback);
    }
}

module.exports = Quites;