var leadModel = require('../models/leadModel.js');

/**
 * leadController.js
 *
 * @description :: Server-side logic for managing leads.
 */
module.exports = {

    /**
     * leadController.list()
     */
    list: function (req, res) {
        leadModel.find(function (err, leads) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting lead.',
                    error: err
                });
            }
            return res.json(leads);
        });
    },

    /**
     * leadController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        leadModel.findOne({_id: id}, function (err, lead) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting lead.',
                    error: err
                });
            }
            if (!lead) {
                return res.status(404).json({
                    message: 'No such lead'
                });
            }
            return res.json(lead);
        });
    },

    /**
     * leadController.create()
     */
    create: function (req, res) {
        var lead = new leadModel({
			email : req.body.email,
			fname : req.body.fname,
			company : req.body.company,
			startDate : req.body.startDate,
			salesman : req.body.salesman

        });

        lead.save(function (err, lead) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating lead',
                    error: err
                });
            }
            return res.status(201).json(lead);
        });
    },

    /**
     * leadController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        leadModel.findOne({_id: id}, function (err, lead) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting lead',
                    error: err
                });
            }
            if (!lead) {
                return res.status(404).json({
                    message: 'No such lead'
                });
            }

            lead.email = req.body.email ? req.body.email : lead.email;
			lead.fname = req.body.fname ? req.body.fname : lead.fname;
			lead.company = req.body.company ? req.body.company : lead.company;
			lead.startDate = req.body.startDate ? req.body.startDate : lead.startDate;
			lead.salesman = req.body.salesman ? req.body.salesman : lead.salesman;
			
            lead.save(function (err, lead) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating lead.',
                        error: err
                    });
                }

                return res.json(lead);
            });
        });
    },

    /**
     * leadController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        leadModel.findByIdAndRemove(id, function (err, lead) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the lead.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
