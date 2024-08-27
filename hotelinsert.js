const mongoose = require("mongoose");
const hotelModel = require("./src/hotel/hotelModel");
const config = require("./src/config/config");
const data = require("./data.json");
const items = require("./item.json");
const categories = require("./categories.json");

const connectdb = async () => {
    try
    {
        await mongoose.connect(config.databaseUrl);
        console.log("connection established");
        await hotelModel.category.deleteMany({});
        await hotelModel.category.create(categories);
        console.log("hotel created");
    }
    catch(err)
    {
        console.error(err);
    }
}

connectdb();