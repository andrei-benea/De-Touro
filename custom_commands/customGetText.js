module.exports = class GetText {
    async command(element) {
        const result = await
            browser.getText(element);
        console.log('Element text', result);
    }
}