module.exports = class SwitchFrame {
    async command(element, id) {
        return browser
            .waitForElementVisible(element, 'Loading iframe...')
            .frame(id)
    }
}