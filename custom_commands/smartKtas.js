module.exports = class SmartKtas {
    async command(element, scndelement, othrelement) {
        await browser
            .pause(2000)
            .elements('css selector', element, function(object) {
                let elementID = object[Object.keys(object)[0]]
                console.log(elementID.length)
                if (elementID.length === 0) {
                    console.log('No unread KTAs!')
                }
                else console.log(`WebElementID: ${elementID}`)
                for (let i = 0; i < elementID.length; i++) {
                    browser
                        .doubleClick(elementID[i])
                        .waitForElementVisible(othrelement)
                        .sendKeys(othrelement, [browser.Keys.ESCAPE]);
                }
            })
            .elements('css selector', scndelement, function(object) {
                let elementID = object[Object.keys(object)[0]]
                console.log(elementID.length)
                if (elementID.length === 0) {
                    console.log('No unread KTAs!')
                }
                else console.log(`WebElementID: ${elementID}`)
                for (let i = 0; i < elementID.length; i++) {
                    browser
                        .doubleClick(elementID[i])
                        .waitForElementVisible(othrelement)
                        .sendKeys(othrelement, [browser.Keys.ESCAPE]);
                }
            })
            console.log('looppppp')
    }
}


// module.exports = class SmartKtas {
//     async command(element, elementa, elementb) {
//         await browser
//             .pause(2000)
//             .waitForElementVisible(element, 'Element visible!')
//             .elements('css selector', element, function (elements) {
//                 elements.value.forEach(function (elementsObj) {
//                     let elementID = elementsObj[Object.keys(elementsObj)[0]]
//                     browser.elementIdAttribute(elementID, 'class', function (result) {
//                         if (result.value == 'x-grid-row tour-grid-unread-row x-grid-data-row' || result.value == 'x-grid-row x-grid-row-alt tour-grid-unread-row x-grid-data-row') {
//                             browser.elementIdText(elementID, function (result) {
//                                 console.log(result)
//                             })
//                             return
//                         }
//                         else return
//                     })
//                 })
//             })
//         console.log('Veriying Unread Ktas...')
//         return
//     }
// }