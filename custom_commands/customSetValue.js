module.exports = class SetValue {
    async command(element, string) {
        return browser
            .waitForElementVisible(element, 'Element visible!')
            .setValue(element, string)
    }
}