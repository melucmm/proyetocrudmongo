const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/config/db");

const app = express();

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("API Turnos funcionando 💅");
  });

  app.use("/api/users", require("./src/routes/userRoute"));
  app.use("/api/services", require("./src/routes/serviceRoute"));
  app.use("/api/appointments", require("./src/routes/appointmentRoute"));

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
