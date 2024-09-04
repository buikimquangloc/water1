const db = require("../models/index");
const userSevice = require('../service/users.service');

const getUsers = async (req, res) => {
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

const getCRUD = (req, res) => {

}

module.exports = {
    getUsers,
    getCRUD,
}