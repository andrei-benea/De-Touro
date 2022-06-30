module.exports = class LogKtaNumber {
    async command(element) {
        var fs = require('fs');
        return browser
            .waitForElementVisible(element, 'Element visible')
            .getText(element, async (result) => {
                var testData = {
                    kta: {
                        number: result.value,
                        type: '',
                    }
                };
                var json = JSON.stringify(testData)
                fs.writeFile('tests_output/ktainfo.json', json, 'utf8', (err) => {
                    if (err) throw err;
                    console.log('Saving KTA number to output JSON!')
                })
                console.log('The KTA Nr. is........ ', result.value)
            })
    }
}