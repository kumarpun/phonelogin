const express = require('express');
const userModel = require('../../../models/user');

const getUserDetails = async (req, res, next) => {

    let { userId } = req.params;

    let user = await userModel.findById(userId).select('phone , ime');

    if(!user) {
        return res.status(404).json({
            "errors": [{
                "msg": "no user found for this phone number"
            }]
        })
    }

    return res.status(200).json({
        "success": [{
            "msg": "phone fetched successfully",
            "data": user
        }] 
    })
}


// const updateIme = async (req, res, next) => {

//     let { userId } = req.params;

//     let { phone, ime } = req.body;
// }

module.exports = {
    getUserDetails : getUserDetails
}