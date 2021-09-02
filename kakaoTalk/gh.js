const { URLSearchParams } = require('url');
const fetch = require('node-fetch');

const params = new URLSearchParams();
params.append('template_object', JSON.stringify({
  "object_type": "text",
  "text": "텍스트 영역입니다. 최대 200자 표시 가능합니다.",
  "link": {
    "web_url": "https://developers.kakao.com",
    "mobile_web_url": "https://developers.kakao.com"
  },
  "button_title": "바로 확인"
}));

fetch("https://kapi.kakao.com/v2/api/talk/memo/default/send", {
  method: 'POST',
  body: params,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Bearer {token}",
  }
})
  .then(res => console.log(res));