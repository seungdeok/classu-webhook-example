function myFunction() {
  var response = UrlFetchApp.fetch(slackAPIURL);
  Logger.log(response.getContentText());
}
