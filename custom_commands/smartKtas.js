module.exports = class SmartKtas {
    async command(element) {
        return browser
            .waitForElementVisible(element, 'Element visible!')
            .getElementProperty(element, 'id', async (result) => {
                console.log(result)
            })
    }
}