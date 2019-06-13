"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./server/App");
const port = process.env.PORT || 3001;
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
