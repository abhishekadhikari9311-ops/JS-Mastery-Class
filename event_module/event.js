let { EventEmitter } = require("events");
let emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log("hello " + name);
});

emitter.emit("greet", "Abhi");
