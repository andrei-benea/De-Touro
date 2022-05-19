module.exports = {
    command: async function (unreadRow, unreadRowAlt) {
        browser.pause(2000)
        const firstPromise = browser
            .elements('css selector', unreadRow, (object) => {
                return new Promise((resolve) => {
                    let items = object[Object.keys(object)[0]]
                    console.log(items.length)
                    resolve()
                })
            })
        const secondPromise = browser
            .elements('css selector', unreadRowAlt, (object) => {
                return new Promise((resolve) => {
                    let itemsAlt = object[Object.keys(object)[0]]
                    console.log(itemsAlt.length)
                    resolve()
                })
            })
        console.log(firstPromise)
        //   this.url('http://nightwatchjs.org');
        //   this.waitForElementVisible('section#index-container');

        //   const result = await this.elements('css selector', '#index-container ul.features li');
        //   this.assert.strictEqual(result.value.length, 7, 'Feature elements number is correct');
    }
};


// module.exports = class SmartKtas {
//     async command(unreadRow, unreadRowAlt) {
//         browser.pause(2000)
//         const firstPromise = browser
//             .elements('css selector', unreadRow, (object) => {
//                 return new Promise((resolve) => {
//                     let items = object[Object.keys(object)[0]]
//                     console.log(items.length)
//                     resolve()
//                 })
//             })
//         const secondPromise = browser
//             .elements('css selector', unreadRowAlt, (object) => {
//                 return new Promise((resolve) => {
//                     let itemsAlt = object[Object.keys(object)[0]]
//                     console.log(itemsAlt.length)
//                     resolve()
//                 })
//             })
//         console.log(firstPromise)
//     }
// }



// module.exports = class SmartKtas {
//     async command(element, scndelement, othrelement, frthelement, ffthelement, sxthelement) {
//         await browser
//             .pause(2000)
//             .elements('css selector', element, function (object) {
//                 let elementID = object[Object.keys(object)[0]]
//                 console.log(elementID.length)
//                 if (elementID.length === 0) {
//                     console.log('No unread KTAs!')
//                     console.log('Checking bids..')
//                     browser.elements('css selector', ffthelement, function (objecty) {
//                         let anotherElementID = objecty[Object.keys(objecty)[0]]
//                         console.log('Available KTAs: ' + anotherElementID.length)
//                         // for (let i = 0; i < anotherElementID.length; i++) {

//                         // }
//                     })
//                     browser.elements('css selector', sxthelement, function (objectz) {
//                         let anotherElementID = objectz[Object.keys(objectz)[0]]
//                         console.log('Available KTAs: ' + anotherElementID.length)
//                     })
//                 }
//                 else console.log(`WebElementID: ${elementID}`)
//                 for (let i = 0; i < elementID.length; i++) {
//                     browser
//                         .doubleClick(elementID[i])
//                         .waitForElementVisible(othrelement, 'Inside first for loop')
//                         .elements('css selector', frthelement, function (objectx) {
//                             let otherElementID = objectx[Object.keys(objectx)[0]]
//                             console.log(otherElementID.length)
//                             console.log(`WebElementID: ${otherElementID}`)
//                         })

//                     browser
                        // .sendKeys(othrelement, [browser.Keys.ESCAPE]);
//                 }
//             })
//             .elements('css selector', scndelement, function (object) {
//                 let elementID = object[Object.keys(object)[0]]
//                 console.log(elementID.length)
//                 if (elementID.length === 0) {
//                     console.log('No unread KTAs!')
//                 }
//                 else console.log(`WebElementID: ${elementID}`)
//                 for (let i = 0; i < elementID.length; i++) {
//                     browser
//                         .doubleClick(elementID[i])
//                         .waitForElementVisible(othrelement)
//                         .sendKeys(othrelement, [browser.Keys.ESCAPE]);
//                 }
//             })
//         console.log('looppppp')
//     }
// }


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