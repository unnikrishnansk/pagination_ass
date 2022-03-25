const express = require("express");

const User = require("../models/user.model");
const transporter = require("../config/mail");


const router = express.Router();



router.get("/", async (req,res) => {
    try{
        const page = req.query.page;
        const pagesize = req.query.pagesize || 10;

        const skip = (page-1)*pagesize;

        const users = await User.find().skip(skip).limit(pagesize).lean().exec();

        const totalpages = Math.ceal(await user.find().countDocuments()) /pagesize

        return res.status(200).send({users,totalpages});
    }
    catch(err)
    {
        return res.status(500).send({message : err.message})
    }
});

router.post("/", async (req,res) => {

    try{

        const user = await User.create(req.body);
        let info = await transporter.sendMail({
            from: '"Admin<admin@abc.com>', // sender address
            to: "user@example.com, baz@example.com", // list of receivers
            subject: "Welcome to ABC system", // Subject line
            text: `Hi ${user.first_name},${user.first_name} ${user.last_name} has registered with us text :- Please welcome ${user.first_name} ${user.last_name}`, // plain text body
            html: `<b>Hi ${first_name}, ${user.first_name} ${user.last_name} has registered with us text :- Please welcome ${user.first_name} ${user.last_name}</b>`, // html body
          });

          return res.status(201).send({message : "User registered successfully"});
    }
    catch(err)
    {
        return res.status(501).send({message : err.message})
    }

      // send mail with defined transport object
 

})

module.exports = router;