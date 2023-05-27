
const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        const url = process.env.DATABASE_URL;
        mongoose.connect(url).then(()=>{
            console.log("Database connected");
        })
    } catch (error) {
        return null;
    }
}
module.exports = connectToDb;