const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
}, {
    collection: 'cim_system'
})

module.exports = mongoose.model('Customer', customerSchema)