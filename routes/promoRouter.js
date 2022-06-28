const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('GET request for /promotions');
    })
    .post((req, res, next) => {
        res.end('POST request for /promotions');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('DELETE request for /promotions');
    });

promoRouter.route('/:promoID')
    .get((req, res, next) => {
        res.end('GET request for ' + req.params.promoID);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST request for ' + req.params.promoID);
    })
    .put((req, res, next) => {
        res.write('Updating the promo ' + req.params.promoID + '\n');
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('DELETE request for ' + req.params.promoID);
    });

module.exports = promoRouter;