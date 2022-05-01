module.exports = class SwitchFrame {
    async command(element, id) {
        return browser
            .waitForElementVisible(element, 'iframe is visible!')
            .frame(id, async () => {
                console.log('Switching iframe..')
            })
    }
}