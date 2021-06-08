const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const SignUpDetail = require("../../../models/Root/signUp");


//signUp .
router.post("/signup", async (req, res, next) => {
  try {
    // console.log(req.body)
    if (req.body.password === req.body.confirm_password) {
      const currentUser = await SignUpDetail.findOne({
        email: req.body.email,
      });

      if (currentUser) {
        // already have this user
        res.json({ message: "User already exist." });
      } else {
        // save user to db
        const encstring = bcrypt.hashSync(req.body.password, 8);
        const user = await new SignUpDetail({
          user_name: req.body.user_name,
          email: req.body.email,
          contact_no: req.body.contact_no,
          password: encstring,
        }).save();
        
        res.json({ message: "success", user: user });
      }
    } else {
      res.json({ message: "Password not Match" });
    }
  } catch (e) {
    res.status(400);
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
