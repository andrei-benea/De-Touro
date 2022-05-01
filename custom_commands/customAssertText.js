module.exports = class CustomAssertText {
    async command(element, string) {
        return browser
            .waitForElementVisible(element, 'Element visible!')
            .expect.element(element).text.to.contain(string)
    }
}