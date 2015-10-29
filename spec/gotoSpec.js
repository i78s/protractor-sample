var fs = require('fs');

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream('./capture/' + filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

describe('LIG メンバーページ', function() {

    beforeEach(function() {
        var width = 1440;
        var height = 900;
        browser.driver.manage().window().setSize(width, height);

        // 非Angularのページの場合に必要
        browser.ignoreSynchronization = true;
    });

    it('ページタイトル', function() {
        browser.get('http://liginc.co.jp/member/member_detail?user=h.goto');
        expect(browser.getTitle()).toEqual('後藤 寛一｜メンバー | 株式会社LIG');
    });

    it('名前', function() {
        var header = element(by.css('.b_member_header--jp'));
        header.getText().then(function(res){
            //console.log(res);
            expect(res).toBe('後藤 寛一');
        });

        var subHeader = element(by.css('.b_member_header--en'));
        expect(subHeader.getText()).toBe('Hirokazu Goto');
    });

    it('紹介文', function() {
        var text = element(by.css('.b_member_photo--text'));
        expect(text.getText()).toBe('フロントエンドエンジニアのおじいちゃんと言います。本当は24歳です。よろしくお願いします。');
    });

    it('ページ遷移のテスト', function() {
        element.all(by.css('.navi_triple--item')).get(0).click();
        expect(browser.getCurrentUrl()).toBe('http://liginc.co.jp/member/member_detail?user=horiguchi');
    });

    it('スクリーンショットを撮る', function() {
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'StrongestCSSDesign.png');
        });
    })
});