import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("second request")
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});