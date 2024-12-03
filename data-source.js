import { DataSource } from "typeorm";
import { Favorite } from "./src/entity/Favorite";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    synchronize: true,
    logging: false,
    entities: [Favorite]
});

