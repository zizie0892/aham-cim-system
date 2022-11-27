let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

let customerSchema = require('../models/customer.model');


router.post('/create-customer/', (err, req, res, next) => {
    customerSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get("/list-customer/", (req, res, err, next) => {
    customerSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

router
    .route('/update-customer/:id')
    .get((err, req, res, next) =>{
        customerSchema.findById(
            req.params.id, (error, data) => {
                if (error){
                    return next(error);
                }else {
                    res.json(data);
                }
            }
        );
    })

    .put((err, req, res, next) => {
        customerSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            (error, data) => {
                if (error) {
                    return next(error);
                }else {
                    res.json(data);
                    console.log('Customer updated successfully!');
                }
            }
        );
    });

router.delete('/delete-customer/:id',
(err, req, res, next) => {
    customerSchema.findByIdAndRemove(
        req.params.id, (error,data) => {
            if (error){
                return next(error);
            }else {
                res.status(200).json({
                    msg: data
                })
            }
        }
    )
});

module.exports = router;