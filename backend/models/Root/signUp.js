const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignUpetailSchems = new Schema({
    user_name: {
        type: Schema.Types.String
    },
    email: {
        type: Schema.Types.String
    },
    contact_no: {
        type: Schema.Types.Number,
        default: ""
    },
    password: {
        type: Schema.Types.String,
        default: ""
    }
});

SignUpDetail = mongoose.model("signup_detail", SignUpetailSchems);

module.exports = SignUpDetail;
