const app = require("./app");
const AppDataSource = require("./data-source");

// Define the port number for the server
const PORT = 3000;

(async () => {
  try {
    await AppDataSource.connect();
    console.log("DB connection open");
    // Start the server and listen on the specified port
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    // Log any errors that occur during server startup
    console.error("Error starting the server:", error);
  }
})();
