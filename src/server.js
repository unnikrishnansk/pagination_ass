const app = require("./index");

const connect = require("./config/db");

app.listen(5757, async function(){
    await connect();
    console.log("Listening to port 5757");
});