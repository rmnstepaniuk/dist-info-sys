const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('GET request for /leaders');
    })
    .post((req, res, next) => {
        res.end('POST request for /leaders');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders');
    })
    .delete((req, res, next) => {
        res.end('DELETE request for /leaders');
    });

leaderRouter.route('/:leaderID')
    .get((req, res, next) => {
        res.end('GET request for ' + req.params.leaderID);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST request for ' + req.params.leaderID);
    })
    .put((req, res, next) => {
        res.write('Updating the promo ' + req.params.leaderID + '\n');
        res.end('PUT operation not supported on /leaders');
    })
    .delete((req, res, next) => {
        res.end('DELETE request for ' + req.params.leaderID);
    });

module.exports = leaderRouter;