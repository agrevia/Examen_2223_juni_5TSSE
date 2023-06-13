const express = require("express");
const knex = require("knex");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = knex({
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "rootRobin",
        password: "rootRobin",
        database: "db_steam"
    }
});


// Schrijf een request dat ons in staat stelt om een game aan te passen.
// Bijvoorbeeld: Als ik via swagger het request http://localhost:3000/updateGame/3 uitvoer en daarbij de data meegeef dan wordt de data van game met ID 3 aangepast.




// Schrijf een request dat ons in staat stelt om een game aan te passen.
// Bijvoorbeeld: Als ik via swagger het request http://localhost:3000/updateGame/3 uitvoer en daarbij de data meegeef dan wordt de data van game met ID 3 aangepast.




// Schrijf een request dat ons in staat stelt om een game te verwijderen.
// Bijvoorbeeld: Als ik via swagger het request http://localhost:3000/deleteGame/3 uitvoer dan wordt de game met ID 3 verwijderd uit de database.


    //get all absences
app.get("/games/", (req, res) => {
    db("tbl_games").select().then(absences => {
        res.status(200).json(absences);
    });
});

// get total playtime of all games
app.get("/playtime", (req, res) => {
    db("tbl_games")
        .select("Play_time")
        .then(games => {
            let totalPlaytime = 0;
            for (const game of games) {
                totalPlaytime += game.Play_time;
            }
            res.status(200).json({ totalPlaytime });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        });
});



app.listen(3000, () => {
    console.log('Server gestart op poort 3000');
});