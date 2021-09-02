function myFunction() {
  MailApp.sendEmail({
    to: "recipient@example.com",
    subject: "Logos",
    htmlBody:
      "inline Google Logo<img src='cid:googleLogo'> images! <br>" +
      "inline YouTube Logo <img src='cid:youtubeLogo'>",
  });
}
