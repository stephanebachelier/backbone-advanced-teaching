define([
  'models/messages',
  'json!#config/messages.json'
],
function (Messages, data) {
  'use strict';

  function takeALongTimeToComplete(json) {
    return new Messages(json.messages);
  }

  return new Promise(function (resolve, reject) {
    resolve(takeALongTimeToComplete(data));
  });
});
