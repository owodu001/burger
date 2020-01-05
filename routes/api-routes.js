const db = require("../models");

module.exports = function(app) {
    // use app to setup api routes

    //route to create a burger
    app.post("/api/burgers/", async function(req, res) {
        console.log(">>>>>>>>>>>", req.body)
        const burger = await db.Burger.create({ burger_name: req.body.burger_name });
        res.json(burger);
    });
    //route to get all the burgers
    app.get("/api/burgers", (req, res) => {
        db.Burger.findAll({}).then(burgers => {
            console.log(burgers.length);
            res.json(burgers);
        });
    });
    // route to delete a burger
};