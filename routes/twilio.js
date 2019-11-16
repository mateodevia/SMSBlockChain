var express = require("express");
var router = express.Router();
var MyTwilioLib = require("../MyTwilioLib");
const myTwilioLib = MyTwilioLib();

router.post("/newmessage", (req, res) => {
  const newMessage = req.body.Body;
  const usuario = req.body.From;
  myTwilioLib.respondToMessage("Respuesta", res);
});
module.exports = router;
