//require from another file
// const logger = require("./app");

// logger.log("baba");

//Operating system method-for info of the os
// const os = require("os");

// const mem = os.userInfo();

// console.log(mem);

//expect an event
const EventEmitter = require("events");

const emitter = new EventEmitter();

//register a listener
emitter.on("messageLogged", arg => {
  console.log("I am learning node", arg);
});

//raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" });
