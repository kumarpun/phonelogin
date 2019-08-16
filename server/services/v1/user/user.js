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
const getUserByPhone = async (req, res, next) => {


    let user = await userModel.find({ });

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

const updateIme = async (req, res, next) => {

    let { userId } = req.params;

    let { phone, ime } = req.body;

    try {
        let user = await userModel.findOneAndUpdate(userId, {
            phone: phone,
            ime: ime
        });

        if(!user) {
            throw new error();
        }

        return res.status(201).json({
            "success": [{
                "msg": "Update successfull",
                "data": user

            }]
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            "errors": [{
                "msg": "problem while updating"
            }]
        })
    }
}

// const updateImeWithPhone = async (req, res, next) => {

//     let { phone } = req.params;

//     let { ime } = req.body;

//     try {
//         let user = await userModel.findOneAndUpdate(phone, {
//             ime: ime
//         });

//         if(!user) {
//             throw new error();
//         }

//         return res.status(201).json({
//             "success": [{
//                 "msg": "ime updated successfully",
//                 "data": user

//             }]
//         });
//     } catch(error) {
//         console.log(error);
//         return res.status(500).json({
//             "errors": [{
//                 "msg": "problem while updating"
//             }]
//         })
//     }
// }
module.exports = {
    getUserDetails : getUserDetails,
    // updateImeWithPhone : updateImeWithPhone,
    getUserByPhone : getUserByPhone,
    updateIme : updateIme
}