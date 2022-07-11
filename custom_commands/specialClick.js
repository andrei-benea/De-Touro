module.exports = class SpecialClick {
    async command(element) {
        browser
            .waitForElementVisible(element, async() => {
                console.log('Element ' + element + ' is visible!')
            })
            .click(element, async () => {
                console.log('Clicking...')
            })
    }
}