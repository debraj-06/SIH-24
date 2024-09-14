const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDb Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};

module.exports = connectDb;