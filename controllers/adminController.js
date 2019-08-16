const db = require("../models");

// Defining methods for the adminController
module.exports = {
  // findAll: function(req, res) {
  //   db.Admin.find(req.query)
  //     .then(dbAdmin => res.json(dbAdmin))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    db.Admin.findById(req.params.id)
      .then(dbAdmin => res.json(dbAdmin))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Admin.create(req.body)
      .then(dbAdmin => res.json(dbAdmin))
      .catch(err => res.status(422).json(err));
  }
};
