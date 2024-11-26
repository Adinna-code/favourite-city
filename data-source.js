import { DataSource } from "typeorm";
import { Favorite } from "./src/entity/Favorite";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    synchronize: true,
    logging: false,
    entities: [Favorite]
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    })

