const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect('mongodb+srv://deadlock:asrasr123@cluster0.mnhdnpb.mongodb.net/?retryWrites=true&w=majority')
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB