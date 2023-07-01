const app = require("./app");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const {
  PORT = 3001,
  DB_HOST = "mongodb+srv://Vitalik:2656vipO@cluster0.emctnag.mongodb.net/db-contacts?retryWrites=true&w=majority",
} = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("\x1B[32m Database connection successful");

    app.listen(PORT, () => {
      console.log(
        `\x1B[32m Server running. Use our API on port: \x1B[37m http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(
      `\x1B[31m Server not running. \x1B[37m Error message: ${error.message}`
    );
    process.exit(1);
  });
