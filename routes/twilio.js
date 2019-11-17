var express = require("express");
const axios = require("axios");
var router = express.Router();
var MyTwilioLib = require("../MyTwilioLib");
const myTwilioLib = MyTwilioLib();

router.post("/newmessage", (req, res) => {
  const newMessage = req.body.Body;
  const usuario = req.body.From;
  let partes = newMessage.split(" ");
  let ids = "Sus códigos son:\n";
  let transformaciones = [];
  let hijos = [];
  for (let i = 0; i < parseInt(partes[1]); i++) {
    let newId = Math.random()
      .toString(36)
      .substring(2, 7);
    transformaciones.push({
      id: newId,
      lvlTransformacion: 0,
      final: false
    });
    ids = ids + newId + "\n";

    for (let j = 0; j < parseInt(partes[2]); j++) {
      hijos.push({
        id: newId + "-" + j,
        padre: newId
      });
      ids =
        ids +
        Math.random()
          .toString(36)
          .substring(2, 7) +
        "\n";
    }
  }

  axios
    .post("http://34.229.204.133:3000/transformaciones", transformaciones, {
      headers: {
        "Content-Type": "text/json"
      }
    })
    .then(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );

  axios
    .post("http://34.229.204.133:3000/hijos", hijos, {
      headers: {
        "Content-Type": "text/json"
      }
    })
    .then(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  myTwilioLib.respondToMessage(ids, res);
});
module.exports = router;
