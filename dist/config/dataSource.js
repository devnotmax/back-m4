"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Order_1 = require("../entities/Order");
const Category_1 = require("../entities/Category");
const Product_1 = require("../entities/Product");
const dotenv = __importStar(require("dotenv"));
// Cargar variables de entorno
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL, // Usamos DATABASE_URL proporcionado por Railway
    synchronize: true, // Asegúrate de que en producción uses migraciones en lugar de synchronize
    logging: false,
    entities: [User_1.User, Credential_1.Credential, Order_1.Order, Product_1.Product, Category_1.Category],
    subscribers: [],
    migrations: [],
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false, // Habilitar SSL solo en producción
});
