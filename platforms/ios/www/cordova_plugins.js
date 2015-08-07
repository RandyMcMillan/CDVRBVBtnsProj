cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/net.randymcmillan.cdvrbvbtns/www/cdvrbvbtns.js",
        "id": "net.randymcmillan.cdvrbvbtns.cdvrbvbtns",
        "clobbers": [
            "cdvrbvbtns"
        ]
    },
    {
        "file": "plugins/com.example.hello/www/hello.js",
        "id": "com.example.hello.hello",
        "clobbers": [
            "hello"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "net.randymcmillan.cdvrbvbtns": "0.1.0",
    "com.example.hello": "0.7.0"
}
// BOTTOM OF METADATA
});