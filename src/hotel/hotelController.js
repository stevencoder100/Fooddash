const { hotel, item, category, order } = require('./hotelModel');

const senddata = async (req, res) => {
    try {
        const { pureveg, name } = req.query;
        const queryobject = {};

        if (pureveg) {
            queryobject.pureveg = pureveg;
        }

        if (name) {
            queryobject.name = name;
        }
        const data = await hotel.find(queryobject);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", err });
    }
};

const senditems = async (req, res) => {
    try {
        const { pureveg, name } = req.query;
        const queryobject = {};

        if (pureveg) {
            queryobject.pureveg = pureveg;
        }

        if (name) {
            queryobject.name = name;
        }
        const data = await item.find(queryobject);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", err });
    }
};

const sendcategories = async (req, res) => {
    try {
        const data = await category.find(req.query);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

const createOrder = async (req, res) => {
    try {
        const { phone, email, username, restaurantName, foodItems, total } = req.body;

        if (!phone || !email || !username || !restaurantName || !foodItems || !total) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newOrder = new order({
            phone,
            email,
            username,
            restaurantName,
            foodItems,
            total
        });

        await newOrder.save();
        return res.status(200).json({ message: "Order created successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to create order" });
    }
};

module.exports = { senddata, senditems, sendcategories, createOrder };
