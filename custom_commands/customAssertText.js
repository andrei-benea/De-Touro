module.exports = class CustomAssertText {
    async command(element, string) {
        return browser
            .waitForElementVisible(element)
            .expect.element(element).text.to.contain(string)
    }
}