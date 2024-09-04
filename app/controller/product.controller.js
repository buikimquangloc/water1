const db = require("../models/index");

const getProduct = async (req, res) => {
    // try {
    //     let data = await db.Sanpham.findAll();
    //     console.log(data);
    //     return res.send({
    //         data: JSON.stringify(data)
    //     });
    // }catch (e) {
    //     console.error(e);
    // }
    return res.send('GET all products');
}

const getCRUD = (req, res) => {

}

module.exports = {
    getProduct,
    getCRUD,
}