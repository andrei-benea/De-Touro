module.exports = class LogKtaNumber {
    async command(element) {
        const result = await
            browser
                .waitForElementVisible(element, 'Element visible!')
                .getText(element);
        console.log('The KTA Nr. is:', result);
    }
}