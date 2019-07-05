const Company = require('../models/Company');

module.exports = function(app) {

    app.get('/api/company', function(req, res) {
        Company.find()
        .then(function (data) {
            res.json({ status: 200, data: data, message: 'Company data retrieved successfully' });
        })
        .catch(function (err) {
            res.json({ status: 500, message: err });
        });        
    });

    app.post('/api/company', function (req, res) {
        Company.create(req.body)
        .then(function (data) {
            res.json({ status: 200, data: data.name, message: 'Company data created successfully' });
        })
        .catch(function (err) {
            if (err.name === 'MongoError') { 
                // Duplicate entry errors are handled here
                // In case of concurrent create by different users using same company name
                res.json({ status: 409, message: err });
            } else {
                res.json({ status: 400, message: 'Please use the website to manage company data' });
            }
        });
    });

    app.put('/api/company', function (req, res) {
        Company.findOneAndUpdate({ name: req.body.name }, req.body)
        .then(function (data) {
            res.json({ status: 200, data: data.name, message: 'Company data updated successfully' });
        })
        .catch(function (err) {
            // Company data nonexistent
            res.json({ status: 404, message: err });
        });
    });

    app.delete('/api/company', function (req, res) {
        Company.findOneAndDelete({ name: req.body.name })
        .then(function (data) {
            res.json({ status: 200, data: data.name, message: 'Company data deleted successfully' });
        })
        .catch(function (err) {
            // Company data nonexistent
            res.json({ status: 404, message: err });
        });
    });
    
};