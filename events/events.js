const Events = require("events");
const WebSocket = require("ws");

class EventHandler extends Events.EventEmitter {
    constructor() {
        super();
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
            this.emit("message", JSON.parse(message));
        });
    }
}

exports.default = EventHandler;

