function myFunction() {
  // text template
  var params = {
    template_object: {
      object_type: "text",
      text: "텍스트 영역입니다. 최대 200자 표시 가능합니다.",
      link: {
        web_url: "https://developers.kakao.com",
        mobile_web_url: "https://developers.kakao.com",
      },
      button_title: "바로 확인",
    },
  };
  var options = {
    method: "post",
    headers: {
      Authorization: "Bearer {token}",
    },
    payload: JSON.stringify(params),
  };
  UrlFetchApp.fetch(
    "https://kapi.kakao.com/v2/api/talk/memo/default/send",
    options
  );
}
