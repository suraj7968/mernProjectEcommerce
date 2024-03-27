const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message} `);
  console.log("Shutting Down the Server Due To handling Uncaught Exception");
  process.exit(1);
});

// config
dotenv.config({ path: "backend/config/config.env" });

// Connecting datbase
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is Working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message} `);
  console.log("Shutting Down the Server Due To unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
