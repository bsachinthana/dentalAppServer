const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ComplaintSchema = new Schema({
    complaint_name:{type: String, required: true, max: 50},
    complaint_type:{type: String, required:true, max: 100},
    complaint_history:{type: String, required:true, max:200},
});

module.exports = mongoose.model('Complaint',ComplaintSchema);