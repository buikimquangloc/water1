const app = require('./app');
const config = require('./app/config');

const connect  = require('./app/utils/connnect');

async function startServer() {
    try 
    {
        // await connect.connect(config.db.uri); 
        // console.log("Connected to the database!");

        const PORT = config.app.port; 
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } 
    catch (error) {
        console.log("Cannot connect to the database!", error); 
        process.exit();
    }
}

startServer();
 