const controller = require('../controller/item');
const { authJwt } = require("../middleware");
const express = require('express');

const router = express.Router();

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