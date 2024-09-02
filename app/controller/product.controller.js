const db = require("../models/index");

const getProduct = async (req, res) => {
    try {
        let data = await db.Users.findAll();
        console.log(data);
        return res.send({
            data: JSON.stringify(data)
        });
    }catch (e) {
        console.error(e);
    }
}

module.exports = {
    getProduct,
}