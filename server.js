const app = require('./app');
const config = require('./app/config');

const connection = require('./app/module/connect.data');
    
async function startServer() {
    try 
    {
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

// connection.query(
//     "select * from sanpham",
//     function(err, results, fields) {
//         // if (err) throw err;
//         console.log('-> kết quả: ', results);
//     }
// )

startServer();
 