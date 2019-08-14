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


module.exports = {
    register : register
}