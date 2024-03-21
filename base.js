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

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send("user not found");
    }
});

app.post("/users", (req, res) => {
    const {name} = req.body;
    const id = users.length + 1;
    const newUser = {id, name};

    users.push(newUser);

    res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        users[userIndex].name = name;

        res.json(users[userIndex]);
    } else {
        res.status(404).send("user not found");
    }
});

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);

        res.status(204).send();
    } else {
        res.status(404).send("user not found");
    }
});

app.listen(port, () => {
    console.log(`listening on port:${port}`)
});