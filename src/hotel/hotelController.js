const { hotel, item, category } = require('./hotelModel');

const senddata = async (req, res) => {
    try 
    {
        const { pureveg, } = req.query;
        const queryobject = {};

        if(pureveg)
        {
            queryobject.pureveg = pureveg;
        }
        const data = await hotel.find(queryobject);
        res.status(200).json(data); 
    } 
    catch (err) 
    {
        res.status(500).json({ message: "Internal Server Error", err });
    }
};

const senditems = async (req, res) => {
    try
    {
        const { pureveg, name } = req.query;
        const queryobject = {};

        if (pureveg) {
            queryobject.pureveg = pureveg;
        }

        if(name)
        {
            queryobject.name = name;
        }
        const data = await item.find(queryobject);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error", err });
    }
};

const sendcategories = async (req, res) => {
    try
    {
        const data = await category.find(req.query);
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
    }
};

module.exports = { senddata, senditems, sendcategories };