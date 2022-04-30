module.exports = class CustomClick {
    async command(element) {
        return browser
            .waitForElementVisible(element, 'Element visible!')
            .click(element, async () => {
                console.log('Clicking...')
            })
    }
}