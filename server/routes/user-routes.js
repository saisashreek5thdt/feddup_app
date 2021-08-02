const express = require("express");
const router = express.Router();
const Users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const fetch=require("node-fetch")
const {OAuth2Client}=require("google-auth-library");
const client= new OAuth2Client(keys.google.clientID)


router.post(
    "/signup",
    async (req, res) => {
        const {
            fullName,
            email,
            password,
            ipAddress,
            os,
            network,
            browser
        } = req.body;
        try {
            let user = await Users.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }
            user = new Users({
                fullName,
                email,
                password,
                ipAddress,
                os,
                network,
                browser
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
              await user.save()
              res.status(200).json({
                             message: "registered"
              });
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);


router.post(
    "/login",
    async (req, res,next) => {
      const { username, password } = req.body;
      try {
        let user = await Users.findOne({
          email:username
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist"
          });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });
          const token = jwt.sign({ user }, keys.token.TOKEN_SECRET);
            req.token = token;
            const newUser = {
                token: req.token,
                user: req.user,
              };
              res.send(newUser);
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
      next()
    }
  );

  router.get("/login/auth", (req, res) => {
    if (req.user) {
      //   Create and assign a token
      const token = jwt.sign({ user: req.user }, keys.token.TOKEN_SECRET);
      const user = {
        token: token,
        user: req.user,
        success: true,
      };
      res.send(user);
    } else {
      res.send({ success: false });
    }
  });

  router.post("/googlelogin", 
  
  async(req,res)=>{
    const{tokenId}=req.body
    const data= await client.verifyIdToken({idToken:tokenId,audience:keys.google.clientID}).then( (res)=>{
      return res.payload
    })
    const {email_verified,name,email}=data
      if(email_verified){
        let user= await Users.findOne({email})
        if(user){
          const token = jwt.sign({ user }, keys.token.TOKEN_SECRET);
            const {fullName,email,_id}=user
            res.json({
              token:token,
              user:{_id,fullName,email}
            })
        }else{
          console.log("data",data)
          console.log("email",data.email)
          let password=data.email+keys.token.TOKEN_SECRET
            newUser=new Users({fullName:data.name, email:data.email, password:password})
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);
            await newUser.save()
            const token = jwt.sign({newUser }, keys.token.TOKEN_SECRET);
            const {fullName, email, _id}=newUser
          res.json({
            token:token,
            user:{fullName, email, _id}
          })
        }
      }
    })


  router.post("/facebooklogin", 
  async(req,res)=>{
    const{accessToken,userID}=req.body
    let urlGraphFacebook=`https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`
    const data= await fetch(urlGraphFacebook,{
      method:'GET'
    }).then( (res)=>{
      return res.json()
    })
    console.log("data",data)
    const {name,email}=data
        let user= await Users.findOne({email})
        if(user){
          const token = jwt.sign({ user }, keys.token.TOKEN_SECRET);
            const {fullName,email,_id}=user
            res.json({
              token:token,
              user:{_id,fullName,email}
            })
        }else{
          console.log("data",data)
          console.log("email",data.email)
          let password=data.email+keys.token.TOKEN_SECRET
            newUser=new Users({fullName:data.name, email:data.email, password:password})
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);
            await newUser.save()
            const token = jwt.sign({newUser }, keys.token.TOKEN_SECRET);
            const {fullName, email, _id}=newUser
          res.json({
            token:token,
            user:{fullName, email, _id}
          })
        }
    })
    router.post("/linkedinlogin", 
    async(req,res)=>{
      const{code}=req.body
      let urlLinkedin=`https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/linkedin&client_id=${keys.linkedin.clientID}&client_secret=${keys.linkedin.clientSecret}`
      const token= await fetch(urlLinkedin,{
        method:'GET'
      }).then( (res)=>{
        return res.json()
      })
      console.log("token",token.access_token)
      let url=`https://api.linkedin.com/v2/me`
      const data= await fetch(url,{
      method: 'GET',
      headers: {
        'Host': "api.linkedin.com",
        'Connection': "Keep-Alive",
        'Authorization':'Bearer '+token.access_token
      },}).then((res)=>{
        return res.json()
      })
      console.log("data",data)
      // const {name,email}=data
      //     let user= await Users.findOne({email})
      //     if(user){
      //       const token = jwt.sign({ user }, keys.token.TOKEN_SECRET);
      //         const {fullName,email,_id}=user
      //         res.json({
      //           token:token,
      //           user:{_id,fullName,email}
      //         })
      //     }else{
      //       console.log("data",data)
      //       console.log("email",data.email)
      //       let password=data.email+keys.token.TOKEN_SECRET
      //         newUser=new Users({fullName:data.name, email:data.email, password:password})
      //         const salt = await bcrypt.genSalt(10);
      //         newUser.password = await bcrypt.hash(password, salt);
      //         await newUser.save()
      //         const token = jwt.sign({newUser }, keys.token.TOKEN_SECRET);
      //         const {fullName, email, _id}=newUser
      //       res.json({
      //         token:token,
      //         user:{fullName, email, _id}
      //       })
      //     }
      })
  
    
module.exports = router;