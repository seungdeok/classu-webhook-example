function myFunction() {
  var response = UrlFetchApp.fetch(telegramAPIURL);
  Logger.log(response.getContentText());
}
