'use strict';

var express = require('express'),
    parser = require('body-parser'),
    http = require('http'),
    firebase = require("firebase-admin");

firebase.initializeApp({
	credential: firebase.credential.cert({
	    projectId: "hackprinceton-7a89c",
	    clientEmail: "firebase-adminsdk-188ew@hackprinceton-7a89c.iam.gserviceaccount.com",
	    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDPq2VTJTWz5o4E\nDcXKNxLooszb0zXEouSBaCr6OGwBbOsf3VpU5KdRTkWA3KKwc/oBf7/GbK9twnvw\ndXiY4RaT6QIfGTwQsUz2kuSB4wrbjDTP/RoRt00hET89p8exogWRpmnf0TIs9vBR\nHrYjx8a6H7OtDXdnTDM/Cvc+21YkEPKYEOMPoNZzkpOSGxGXhYdS9RMjugM0tb6M\nkpJTfRcujwSmIT0zRM4qLhcNwfpBCO/paP8zEsCQpGZipmLXqTKc4gUBbUEnSKyX\nEmySUlazTKtNhWd6zGg1S5XBubCpAgoEj9VdKkP9wHWw8/8HbtogIJeMN+4LPGSd\n/ldd71pjAgMBAAECggEAJPqqQlH/7BcD9ujU7Zs8/LvwqrxDeM5gzkJUVNYzNVXF\n0JjD+xX0TWAYtEeVmMIuJJIw/g5gdrUJCNqCLQb31ELLo+oEbhyETev+ULqzNkET\nLm4tdDYlv9uoXTxBLPpi73qoo7hGrQcT5/4GBP0QABihEBGzz2scPP+g40p/XlBs\nEzWegK+HkYPjIsk7MQlXcyPinwHntDl4RQHFPtru4CBX25nIj4LH5rQFrrlRszHq\nVTUI/BB8wiuAwUcaAZjNW9bpfOEL9JTzgWMtHMCnS7TddkawKbfejz5YDlXybOCP\nEeJDrVra6al5DIiRUY6MCMrHdPrTFF4U4vd+sX+JsQKBgQDwMbc7V+RPv1zg/yOz\n1wARzscFr1enAbhGrR2UJ0MK7gu3P5R/8w+qdjICRZ0F7+UE8WF+ogrPcEUR4zEh\n2Gp/QNFvU38f9gPq55AeB/vuZDWtAdAZTr5Y85/tsv8bNTZmCh3OLrq1vOGstN/x\nl6aYUMW2IzP/aAO3GUWhZplDfQKBgQDdVcXaS/uyr5I2OQSpCFR8ZNM9hSHZ2WAV\nliTf+WrtsWptNboOhPimuD34YSbrWwUsULX7TLAtcApT0pnQ4sDlL3vTU2h5QQsE\nfzvKqL8s8M2GJVwZ/3qjvims9Nf2TmTYyrnbquRtjnkz/cEA+VPe2LncSEegj6Dk\nmaQClz+7XwKBgHAlVj7f55qQZ4YpufqyzLaDzArMdmlkdSySkXfl6PiGcnPpvKUM\n0GivbOQAqrLl8hEfvnyInfGCos0aPYtm5zppAiAvZPCARg38dh5/bdI9eY5AhW/7\ngwY3IZmy9Ec4ziBQYuAsk0JdYSTpApJjUwZU2CsVPqbmYq2voAIezDplAoGBALGW\nC1xeUMIKuq6EyydwhpEUOKUIt6NaFQzc3hNSxKeYDQM482KI8BSciSRLlvWJnzny\nPEE4Q7cBSVf+BuohtZFtqtVg+9cmB9gA2hF9mX5Oayixuxck89qDTl72SHzYY3PK\nHJuSnxsEEF1VwVCtu8x2aZHD8Kxz8SzZ1U0626jTAoGBAM/weO2Ld31HEl/dqy1U\nO7ph9ktcqrsw6pDDCZrU060pyCgbxtoRCuBq7qFXtbOnQi6/JkRfWy5ahXxQ12Y1\nzkx4X22KBKP99uHsGCvKgU0SZ6QRDvudE68/TKRxxpFrQQUcu7Q9F4sT8xNOVtfU\nqrFq6obMer98DL99YJt4VB83\n-----END PRIVATE KEY-----\n"
  	}),
  	databaseURL: "https://hackprinceton-7a89c.firebaseio.com"
});

/*
var db = firebase.database();
var ref = db.ref("/some_resource");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());*/

var app = express();

app.use(parser.json());

app.use('/', express.static('public'));


var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Server running at http://hackprinceton:" + port + "/");
})