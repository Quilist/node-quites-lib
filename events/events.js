const Events = require("events");
const WebSocket = require("ws");

class EventHandler extends Events.EventEmitter {
    constructor(client) {
        super();
        this.client = client;
        this.socket = new WebSocket(`ws://quites.site/`);
        this.set_callbacks();
    }

    set_callbacks() {
        this.socket.on("open", async (open) => {
            this.emit("open", open);
        });

        this.socket.on("error", async (error) => {
            this.emit("error", error)
        });

        this.socket.on("close", async (close) => {
            this.emit("close", close);
        });

        this.socket.on("message", async (message) => {
            let struct = JSON.parse(message);

            this.emit("message", struct);
        });
    }
}

exports.default = EventHandler;

