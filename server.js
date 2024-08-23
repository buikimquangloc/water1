const connection = require('./app/config/connection');
require('dotenv').config();
const app = require('./app');

connection();

async function startServer() {
    try{
        const port = process.env.PORT || 3002; 
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }catch (error) {
        console.log("Cannot connect to the database!", error); 
        process.exit();
    }
}
startServer();
 