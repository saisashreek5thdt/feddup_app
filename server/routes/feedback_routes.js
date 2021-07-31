const express = require("express");
const router = express.Router();
const Feedbacks=require("../models/feedback")


router.post("/feedback",
    async(req,res)=>{
      try{
      const{fullName,rating,message}=req.body
      feedback = new Feedbacks({
        fullName,
        rating,
        message
    });
        await feedback.save()
              res.status(200).json({
                message: "registered"
              });
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }

    })

module.exports = router;