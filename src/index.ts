import express from "express";
import sequelize from "./config/db";
import router from "./routes/Router";
import dotenv from 'dotenv';
// here we import express, dotenv due the port number, router and sequelize from config to connect de DB

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", router);

const startServer = async () => { // Here me connect the DB, authenticate make a 1+1 query to test the connection
    try {
        await sequelize.authenticate();
        console.log("Database is connected");
        await sequelize.sync({ force: false });
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (error) {
        console.error("Unable to connect to database", error);
    }
}

startServer();