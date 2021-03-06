var api_key = process.env.mgkey;//'key-XXXXXXXXXXXXXXXXXXXXXXX';
var domain = process.env.mgdomain; //'www.mydomain.com';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
var mailcomposer = require('mailcomposer');
var m = require('./../mongoose/index.js');


var verify = function (email) {
  // get additional info for reset
  var password = Math.random().toString(36).slice(2);
  password = password.toString();
  m.Account.update(
    { email: email },
    { password: password },
    function (err, result) {
      if (err) console.log("ERR", err);
      if (result) {
        console.log('updated ip', result);
      }
    });
  var mail = mailcomposer({
    from: 'Upcrue <donotreply@upcrue.com>',
    to: email,
    subject: 'Password Reset',
    text: 'Test email text',
    html: 'Welcome to Upcrue!<br>Please enter this pin at your account dashboard to verify your email.<br>' + '<b style="font-size:3em">' + password + '</b>'
  });
  mail.build(function (mailBuildError, message) {

    var dataToSend = {
      to: email,
      message: message.toString('ascii')
    };

    mailgun.messages().sendMime(dataToSend, function (sendError, body) {
      console.log(body);
      if (sendError) {
        console.log(sendError);
        return;
      }
    });
  });
}
var newLogin = function (email, pin) {
  var mail = mailcomposer({
    from: 'Upcrue <donotreply@upcrue.com>',
    to: email,
    subject: 'Access from new web or mobile device',
    text: 'Test email text',
    html: 'Welcome to Upcrue!<br>Please enter this pin at your account dashboard to verify your email.<br>' + '<b style="font-size:3em">' + pin + '</b>'
  });
  mail.build(function (mailBuildError, message) {

    var dataToSend = {
      to: email,
      message: message.toString('ascii')
    };

    mailgun.messages().sendMime(dataToSend, function (sendError, body) {
      console.log(body);
      if (sendError) {
        console.log(sendError);
        return;
      }
    });
  });
}
module.exports = {
  verify: verify, // {email,pin}
  newLogin: newLogin // {email,pin,ip}
}