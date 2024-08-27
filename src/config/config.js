const dotenv = require("dotenv");
dotenv.config()

const _config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_STRING || "mongodb+srv://stevencoder100:stevencoder100Tejas@project.3rrvoh4.mongodb.net/project?retryWrites=true&w=majority&appName=project",
};

module.exports = _config;
