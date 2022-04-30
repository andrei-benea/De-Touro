// const { element } = require("nightwatch")

module.exports = class CustomClick {
    async command(element) {
        return browser
            .waitForElementVisible(element)
            .click(element)
    }
}