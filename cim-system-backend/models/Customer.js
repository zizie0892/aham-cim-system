import mongoose from "mongoose";

const Customer = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    phone:{
        type: String,
        required: true
    }
})

export default mongoose.model('Customers', Customer)