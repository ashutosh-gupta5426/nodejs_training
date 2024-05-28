const express = require("express");
const userHandlers = require('../handlers/route_handler');

const router = express.Router();

router.post('/create-user', userHandlers.createUser);

router.put('/update-user/:phone', userHandlers.updateUser);

router.get('/user/:phone', userHandlers.getUserData);

router.get('/users', userHandlers.getAllUsers);

router.delete('/user-delete/:phone', userHandlers.deleteUser);

router.all("/*", async function (req, res) {
  res.status(404).send({ status: false, msg: "Page Not Found!" });
});


module.exports = router;