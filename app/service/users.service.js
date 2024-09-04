import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);


const createUser = () => {

}

const hashPassword = (password) => {
    return new Promise( async (resolve, reject) => {
        try {
            const hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    createUser,
}