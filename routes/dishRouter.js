const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('We will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end('We will add the dish ' + req.body.name + " with details " + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('We will delete all the dishes for you!');
    });

dishRouter.route('/:dishID')
    .get((req, res, next) => {
        res.end('We will send the details of the ' + req.params.dishID + ' dish to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/' + req.params.dishID);
    })
    .put((req, res, next) => {
        res.write('Updating the dish ' + req.params.dishID + '\n');
        res.end('We will update the ' + req.params.dishID + ' dish with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting the dish ' + req.params.dishID);
    });

module.exports = dishRouter;