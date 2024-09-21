import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import * as dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,  // Usamos DATABASE_URL proporcionado por Railway
  synchronize: true, // Asegúrate de que en producción uses migraciones en lugar de synchronize
  logging: false,
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false, // Habilitar SSL solo en producción
});
