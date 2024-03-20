const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Alice Wright"},
    {id: 3, name: "Oscar Bob"},
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`listening on port:${port}`)
});