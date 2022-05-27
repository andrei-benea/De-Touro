module.exports = class LogKtaNumber {
    async command(element) {
        var fs = require('fs');
        const result = await
            browser
                .waitForElementVisible(element, 'Element visible!')
                .getText(element);
        console.log('The KTA Nr. is:', result);
        fs.writeFile('tests_output/ktanumber.txt', result, function (err) {
            if (err) throw err;
            console.log('KTA Number saved to output file!')
        })
    }
}