const accountSid = "AC1c78e026054f08abca1a67beb5c7e1cd";
const authToken = "0a2f211c90811400d3f04747b7922ee6";
const client = require("twilio")(accountSid, authToken);
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const MyTwilioLib = function() {
  const MyTwilioLib = this || {};
  MyTwilioLib.sendMessage = (mensaje, usuario) => {
    client.messages
      .create({
        body: mensaje,
        from: "+17543336872",
        to: usuario
      })
      .then(message => console.log(message.sid));
  };

  MyTwilioLib.respondToMessage = (respuesta, res) => {
    const twiml = new MessagingResponse();
    twiml.message(respuesta);
    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  };

  return MyTwilioLib;
};

module.exports = MyTwilioLib;
