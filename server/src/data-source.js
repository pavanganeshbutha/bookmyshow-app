const { default: mongoose } = require("mongoose");
const mongoosre = require("mongoose");

const dbURL = "mongodb://127.0.0.1:27017/book-my-show";

class AppDataSource {
  static async connect() {
    await mongoose.connect(dbURL);
  }
  static async disconnect() {
    await mongoose.disconnect();
  }
}

module.exports = AppDataSource;
