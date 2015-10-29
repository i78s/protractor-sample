exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
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