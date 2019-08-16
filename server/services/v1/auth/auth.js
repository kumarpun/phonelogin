const express = require('express');
const jwt = require('jsonwebtoken')

const config = require('../../../config/env_config/config');
const userModel = require('../../../models/user');

const register = async (req,res,next) => {

    let { phone, ime } = req.body;

    let isPhoneExists = await userModel.findOne({"phone" : phone});

    if(isPhoneExists){
        return res.status(409).json({
            "errors" : [{
                "msg" : "phone number already exists"
            }]
        })
    }


    try{
        let user = await userModel.create({
           phone: phone,
           ime: ime
        });
    
        if(!user){
            throw new error();
        }
    
        return res.status(201).json({
            "success" : [{
                "msg" : "phone number registered successfully"
            }]
        });
    }catch(error){
        console.log(error);
        return res.status(500).json(
            { 
                "errors" : [{
                    "msg": "problem registering phone."   
                }]
            }
        );
    }
    

}

const login = async (req,res,next) => {

    let { phone } = req.body

    try {
        let isPhoneExists = await userModel.findOne({"phone": phone});

        if(!isPhoneExists) {
            return res.status(401).json({
                "errors": [{
                    "msg": "wrong phone number"
                }]
            })
        }

        let token = jwt.sign({ id: isPhoneExists._id}, config.secret, {expiresIn: 8640000000});

        res.status(200).json({
            "success": [{
                "msg": "user phone found successfully",
                "phone": phone,
                "token": token
            }]
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json(
            {
                "errors": [{
                    "msg": "problem getting user phone"
                }]
            }
        )
    }
}


module.exports = {
    register : register,
    login : login
}