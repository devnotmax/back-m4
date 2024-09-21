"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const envs_1 = require("./config/envs");
const server_1 = __importDefault(require("./server"));
require("reflect-metadata");
const dataSource_1 = require("./config/dataSource");
const preLoadCategories_1 = require("./helpers/preLoadCategories");
const preLoadProducts_1 = require("./helpers/preLoadProducts");
const initialize = async () => {
    try {
        console.log("Initializing server");
        // Inicializar la base de datos
        await dataSource_1.AppDataSource.initialize();
        console.log("Database initialized");
        // Pre-cargar datos si es necesario
        await (0, preLoadCategories_1.preLoadCategories)();
        await (0, preLoadProducts_1.preLoadProducts)();
        // Iniciar el servidor
        server_1.default.listen(envs_1.PORT, () => {
            console.log(`Server running on port ${envs_1.PORT}`);
        });
    }
    catch (error) {
        console.error("Error during initialization", error);
        process.exit(1); // Salir si hay un error
    }
};
initialize();
