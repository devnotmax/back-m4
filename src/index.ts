// index.ts
import { PORT } from "./config/envs";
import app from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";
import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";

const initialize = async () => {
    try {
        console.log("Initializing server");

        // Inicializar la base de datos
        await AppDataSource.initialize();
        console.log("Database initialized");

        // Pre-cargar datos si es necesario
        await preLoadCategories();
        await preLoadProducts();

        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error during initialization", error);
        process.exit(1); // Salir si hay un error
    }
}

initialize();
