const express = require("express");
const router = express.Router();
const ContactUsDetail = require("../../../models/Contact/contact");


router.post("/contact", async (req, res, next) => {
  try {
    const contact_detail = await new ContactUsDetail({
        user_name: req.body.user_name,
        email: req.body.email,
        message: req.body.message,
      }).save();


    res.json({ message: "success"  , detail : contact_detail});
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
