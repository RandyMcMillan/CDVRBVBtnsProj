cordova.define("net.randymcmillan.cdvrbvbtns.cdvrbvbtns", function(require, exports, module) { /*global cordova, module*/

var exec = require('cordova/exec');
module.exports = {

initListener: function (array, successCallback, errorCallback) {

   //cordova.exec('CDVRBVBtns.initListener','id','upBlock','downBlock');
   //cordova.exec(successCallback,errorCallback, "CDVRBVBtns", "initListener", [name]);
   cordova.exec(successCallback, errorCallback, "CDVRBVBtns", "initListener", [array]);

},

startListener: function (array, successCallback, errorCallback) {

//cordova.exec('___FILEBASENAME___.startListen','id','upBlock','downBlock');
//cordova.exec('___FILEBASENAME___.startListen','id','upBlock','downBlock');
cordova.exec(successCallback, errorCallback, "CDVRBVBtns", "startListener", array);
    
},

stopListener: function (array, successCallback, errorCallback) {

   cordova.exec(successCallback, errorCallback, "CDVRBVBtns", "stopListener", [array]);
    
},

greet: function (name, successCallback, errorCallback) {

   cordova.exec(successCallback, errorCallback, "CDVRBVBtns", "greet", [name]);
    
}

}




});
