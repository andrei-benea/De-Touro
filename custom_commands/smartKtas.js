module.exports = class SmartKtas {
    async command(element) {
        // for (let i = 0; i < 1; i++) {
        await browser
            .waitForElementVisible(element, 'Element visible!')
            .elements('css selector', element, function (elements) {
                elements.value.forEach(function (elementsObj) {
                    let elementID = elementsObj[Object.keys(elementsObj)[0]]
                    console.log(`WebElementID: ${elementID}`)
                    browser.elementIdAttribute(elementID, function (result) {
                        // if (data-recordindex == 0) {
                        console.log('\n' + result.value)
                        // }
                    })
                })
                // console.log(result.value)
            })
            .getAttribute(element, 'data-recordindex', async (result) => {
                for (let i = 0; i <= result.value; i++) {
                    console.log('inner loop')
                }
                console.log(result)
            })
        // .expect.element(element).to.have.attribute('data-recordindex')
        // .equals('0');
        console.log('loop')
        // }
        return
    }
}