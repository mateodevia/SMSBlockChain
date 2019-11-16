var express = require("express");
var router = express.Router();
var MyTwilioLib = require("../MyTwilioLib");
const myTwilioLib = MyTwilioLib();

router.post("/newmessage", (req, res) => {
  const newMessage = req.body.Body;
  const usuario = req.body.From;
  let partes = newMessage.split(".");
  let ids = [];
  for (let i = 0; i < parseInt(partes[1]); i++) {
    ids.push(
      Math.random()
        .toString(36)
        .substring(2, 7)
    );
  }
  myTwilioLib.respondToMessage(ids.toString(), res);
});
module.exports = router;
