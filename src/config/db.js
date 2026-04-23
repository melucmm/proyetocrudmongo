const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

const connectDB = async () => {
  try {
    const useEmbedded = process.env.SKIP_EMBEDDED_MONGO !== "true";

    if (useEmbedded) {
      console.log(
        "Iniciando MongoDB embebido (la primera vez puede tardar al descargar el binario)..."
      );
      mongoServer = await MongoMemoryServer.create();
      process.env.MONGO_URI = mongoServer.getUri();
      console.log(`MongoDB embebido escuchando en ${process.env.MONGO_URI}`);
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1);
  }
};

async function shutdownDb() {
  await mongoose.connection.close();
  if (mongoServer) await mongoServer.stop();
}

process.once("SIGINT", async () => {
  await shutdownDb();
  process.exit(0);
});
process.once("SIGTERM", async () => {
  await shutdownDb();
  process.exit(0);
});

module.exports = connectDB;
