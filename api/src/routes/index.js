import express from "express";
import cors from "cors";
import userRoutes from "./users.js";
import animalsRoutes from "./animals.js";

const routes = (app) => {
    const corsOptions = {
        origin: "http://127.0.0.1:5501",
        credentials: true,
        optionSuccessStatus: 200,
        header: "x-access-token",
    };

    app.get("/", (req, res) => {
        res.status(200).send("welcome from server...");
    });

    app.use(cors(corsOptions), express.json(), userRoutes, animalsRoutes);

    //app.use(function (req, res, next) {
    //    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    //    res.header(
    //        "Access-Control-Allow-Headers",
    //        "Origin, X-Requested-With, Content-Type, Accept"
    //    );
    //    next();
    //});
};

export default routes;
