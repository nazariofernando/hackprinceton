'use strict';

var config = {
    apiKey: "AIzaSyBHSM0xITem3X6Smo45mMMlZ7dML-u1mvE",
    authDomain: "hackprinceton-7a89c.firebaseapp.com",
    databaseURL: "https://hackprinceton-7a89c.firebaseio.com",
    storageBucket: "hackprinceton-7a89c.appspot.com",
    messagingSenderId: "144223255288"
  };

firebase.initializeApp(config);

angular.module('hackApp', ['firebase'])

.controller('testCtrl', function($scope, $firebaseArray, $firebaseObject){
	
})

;