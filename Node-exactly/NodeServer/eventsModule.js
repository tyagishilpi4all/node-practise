const EventEmitter = require("events");

const event = new EventEmitter();

event.on("shilpiEvent", (sc, msg)=>{
    console.log(`Event status ${sc}...event fired...${msg}`)
})

event.emit("shilpiEvent", 200 , "ok")
