exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: './webdriver/selenium-server-standalone-*.jar',
    specs: ['spec/**/*Spec.js']
    //,
    //capabilities: {}, // ブラウザ単体でテストする場合の設定
    //multiCapabilities: [  // 複数ブラウザでテストする場合の設定
    //    {
    //        'browserName': 'chrome'
    //    },
    //    {
    //        'browserName': 'firefox'
    //    }
    //]
};

function deglob(config) {
    var glob = require("glob");
    config.seleniumServerJar = glob.sync(config.seleniumServerJar)[0];
}
deglob(exports.config);

function isWindows() {
    return process.platform === 'win32';
}