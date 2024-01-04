import express from "express";  
import cors from "cors";
import Database from "better-sqlite3";
const db = new Database("database.db");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
    response.json("This is the root");
});

app.get("/messages", function (request, response){
    const messageTable = db.prepare("SELECT * FROM messageTable").all();
    response.json(messageTable);
});

app.post("/messages", function (request, response){
    console.log(request.body);
    const firstName = request.body.firstName;
    const message = request.body.message;

    const newMessage = db
        .prepare(`INSERT INTO messageTable (firstName, message) VALUES (?, ?)`)
        .run(firstName, message);
    response.json(newMessage);
});

app.listen(8080, function(){
    console.log("It is working");
});