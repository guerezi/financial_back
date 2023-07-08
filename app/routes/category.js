const controller = require('../controller/category');
const { authJwt } = require("../middleware");
const express = require('express');

const router = express.Router();

router.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
})


router.post(
    '/new',
    [authJwt.verifyToken],
    controller.create
)
router.get(
    '/',
    [authJwt.verifyToken],
    controller.getAll
)

module.exports = router;