const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "danora";

let client;

async function connectDB() {
    if (!client) {
        client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        await client.connect();
    }
    return client;
}

async function getDB() {
    const client = await connectDB();
    return client.db(dbName);
}

module.exports = {
    connectDB,
    getDB
}; 