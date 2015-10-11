'use strict';

console.log('Hello world!');

var app = new Mn.Application();

app.on('start', function () {
  console.log('Marionette application started');
});

app.start();
