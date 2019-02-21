var AV = require('leanengine');
const pushBear = require('./pushbear.js');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function (request) {
  return 'Hello world!';
});


AV.Cloud.define('weekNotify', function () {
  return pushBear({
    text: '新点前端周报填写提醒',
    desp: `您好    记得填写您的周报噢，访问地址：    [https://fe.epoint.com.cn/weeklyreport/](https://fe.epoint.com.cn/weeklyreport/)    已填请忽略。`
  });
});