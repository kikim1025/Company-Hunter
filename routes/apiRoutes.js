const Company = require('../models/Company');

module.exports = function(app) {

    app.get('/api/company', function(req, res) {
        Company.find()
        .then(function (data) {
            res.json({ status: 200, data: data, message: 'Company data retrieved successfully' });
        })
        .catch(function (err) {
            res.json({ status: 500, err: err });
        });        
    });

    app.post('/api/company', function (req, res) {
        Company.create(req.body)
        .then(function () {
            // Send back updated array
            Company.find()
            .then(function (data) {
                res.json({ status: 200, data: data, message: 'Company data created successfully' });
            })
            .catch(function (err) {
                res.json({ status: 500, err: err });
            });   
        })
        .catch(function (err) {
            if (err.name === 'MongoError' && err.code === 11000) { 
                // Duplicate entry errors are handled here
                // In case of concurrent create by different users using same company name
                // Refreshes the client's data
                Company.find()
                .then(function (data) {
                    res.json({ status: 409, data: data, message: 'Company already exists, new data sent' });
                })
                .catch(function (err) {
                    res.json({ status: 500, err: err });
                }); 
            } else if (err.name === 'ValidationError') { 
                // If client sends bad request
                res.json({ status: 400, message: 'Please use the website to manage company data' });     
            } else {
                res.json({ status: 500, err: err });
            };
        });
    });

    app.put('/api/company', function (req, res) {
        // Check first if name is included in request, since update search is based on name
        if (req.body.name) {
            // Options include enabling Mongoose validation for update
            Company.findOneAndUpdate({ name: req.body.name }, req.body, { runValidators: true })
            .then(function (updateData) {
                Company.find()
                .then(function (data) {
                    if (updateData) {
                        res.json({ status: 200, data: data, message: 'Company data updated successfully' });
                    } else {
                        // Company data nonexistent before update req was received
                        // In case of concurrnt delete by another client
                        // Sends back refreshed data to client
                        res.json({ status: 404, data: data, message: 'No such company' });
                    }
                })
                .catch(function (err) {
                    res.json({ status: 500, err: err });
                });
            })
            .catch(function (err) {
                if (err.name === 'ValidationError') { // Validation error on properties
                    res.json({ status: 400, message: 'Please use the website to manage company data' });     
                } else {
                    res.json({ status: 500, err: err });
                };
            });
        } else { // Bad request, without the required name property
            res.json({ status: 400, message: 'Please use the website to manage company data' });
        };
    });

    // If the requested company data doesn't exist, proceeds as if it was deleted since end result is same
    // Still, refreshes the client's data
    app.delete('/api/company', function (req, res) {
        if (req.body.name && req.body.name.length <= Company.schema.obj.name.maxlength) {
            Company.findOneAndDelete({ name: req.body.name })
            .then(function () {
                Company.find()
                .then(function (data) {
                    res.json({ status: 200, data: data, message: 'Company data deleted successfully' });
                })
                .catch(function (err) {
                    res.json({ status: 500, err: err });
                });  
            })
            .catch(function (err) {
                res.json({ status: 500, err: err });
            });
        } else {
            // Bad request
            res.json({ status: 400, message: 'Please use the website to manage company data' });
        };
    });
    
};