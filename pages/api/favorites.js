import { AppDataSource } from "../../data-source";
import { Favorite } from "../../src/entity/Favorite";

export default async function handler(req, res) {
    try {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
            console.log("Data Source has been initialized!");
        }
    
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();

        try {
            await queryRunner.startTransaction();
            const favoriteRepo = queryRunner.manager.getRepository(Favorite);

            if (req.method === "POST") {
                const { cityName, country } = req.body;

                const existingFavorite = await favoriteRepo.findOneBy({ cityName, country });

                if (existingFavorite) {
                    await favoriteRepo.remove(existingFavorite);
                    await queryRunner.commitTransaction();
                    return res.status(200).json({ message: "Favorite removed", cityName });
                } else {
                    const newFavorite = favoriteRepo.create({ cityName, country });
                    await favoriteRepo.save(newFavorite);
                    await queryRunner.commitTransaction();
                    return res.status(200).json({ message: "Favorite added", newFavorite });
                }
            }
        
            if (req.method === "GET") {
                const favorites = await favoriteRepo.find();
                await queryRunner.commitTransaction();
                return res.status(200).json(Array.isArray(favorites) ? favorites : []);
            }

            res.setHeader("Allow", ["GET", "POST"]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        } catch (error) {
            await queryRunner.rollbackTransaction();
            console.error("Transaction error:", error);
            return res.status(500).json({ error: "Internal ServerError" });
        } finally {
            await queryRunner.release();
        }
    } catch (error) {
        console.error("Handler error:", error);
        return res.status(500).json({ error: "Internal Server Error "});
    }
}


/* import { AppDataSource } from "../../data-source";
import { Favorite } from "../../src/entity/Favorite";

export default async function handler(req, res) {
    try {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
            console.log("Data Source has been initialized!");
        }
    
        const favoriteRepo = AppDataSource.getRepository(Favorite);

        if (req.method === "POST") {
            const { cityName, country } = req.body;

            const favorite = new Favorite();

            favorite.cityName = cityName;
            favorite.country = country;

            const existingFavorite = await favoriteRepo.findOneBy({ cityName, country });

            if (existingFavorite) {
                await favoriteRepo.remove(existingFavorite);
                return res.status(200).json({ message: "Favorite removed", cityName });
            } else {
                const newFavorite = { cityName, country };
                await favoriteRepo.save(newFavorite);
                return res.status(200).json({ message: "Favorite added", newFavorite });
            }
        } 
        
        if (req.method === "GET") {
            const favorites = await favoriteRepo.find();
            return res.status(200).json(Array.isArray(favorites) ? favorites : []);
        }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
    } catch (error) {
        console.error("Handler error:", error);
        return res.status(500).json({ error: "Internal Server Error "});
    }
} */