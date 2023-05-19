const express = require('express');
const router = express.Router();

const Middleware = require('../middleware/middleware')

const Login = require('../controllers/logincontrollers');
const Pet = require('../controllers/petcontrollers');
const Hotel = require('../controllers/hotelcontrollers');
const Servicos = require('../controllers/servicocontrollers');

router.post("/login", Login.login)
router.post("/cadastro", Login.create)
router.get("/readAll", Login.readAll)

router.post("/Pet", Pet.create)
router.get("/Pet", Pet.readAll)
router.get("/Pet/:id", Pet.read)
router.put("/Pet/:id", Pet.update)
router.delete("/Pet/:id", Pet.del)

router.post("/Hotel", Hotel.create)
router.get("/Hotel", Hotel.readAll)
router.delete("/Hotel/:id", Hotel.del)

router.post("/Servicos", Servicos.create)
router.get("/Servicos", Servicos.readAll)
router.delete("/Servicos/:id", Servicos.del)

module.exports = router;