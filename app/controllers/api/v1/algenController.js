const algenService = require('../../../services/algenService')

module.exports = {
    create(req,res){
      console.log("masuk contr")
        algenService
        .create(req.body)
        .then((post) => {
          res.status(201).json({
            status: "OK",
            data: post,
          });
        })
        .catch((err) => {
          res.status(422).json({
            status: "FAIL",
            message: err.message,
          });
        });
    },
    list(req, res) {
      algenService
        .list()
        .then(({ data, count }) => {
          res.status(200).json({
            status: "OK",
            data: data,
            total: count ,
          });
        })
        .catch((err) => {
          res.status(400).json({
            status: "FAIL",
            message: err.message,
          });
        });
    },
    update(req, res) {
      algenService
        .update(req.params.id, req.body)
        .then(() => {
          res.status(200).json({
            status: "OK",
          });
        })
        .catch((err) => {
          res.status(422).json({
            status: "FAIL",
            message: err.message,
          });
        });
    },
  
    show(req, res) {
      algenService
        .get(req.params.id)
        .then((post) => {
          res.status(200).json({
            status: "OK",
            data: post,
          });
        })
        .catch((err) => {
          res.status(422).json({
            status: "FAIL",
            message: err.message,
          });
        });
    },
  
    destroy(req, res) {
      console.log("masuk contr")
      algenService
        .delete(req.params.id)
        .then(() => {
          res.status(204).end();
        })
        .catch((err) => {
          res.status(422).json({
            status: "FAIL",
            message: err.message,
          });
        });
    },
}