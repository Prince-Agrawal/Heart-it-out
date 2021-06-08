const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactUsSchems = new Schema({
    user_name: {
        type: Schema.Types.String
    },
    email: {
        type: Schema.Types.String
    },
    message: {
        type: Schema.Types.String
    }
});

ContactUs = mongoose.model("contactus_detail", ContactUsSchems);

module.exports = ContactUs;
