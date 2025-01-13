import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "mydatabase";

export const client = new MongoClient(url);

export const db = client.db(dbName);