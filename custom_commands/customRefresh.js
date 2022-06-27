module.exports = class CustomRefresh {
    async command(button, text) {
        let rezz = await browser.getText(text, async (result) => {
            console.log('inside rezz function ' + result.value)
            return result.value;
        });
        console.log('outside first ' + rezz == 'Keine KTA gefunden')
        while (rezz == 'Keine KTA gefunden') {
            console.count('Attempt: ')
            browser
                .customClick(button)
                .pause(5000)
            let rezzNew = await browser.getText(text, async (result) => {
                console.log('inside rezzNew function ' + result.value)
                return result.value;
            });
            console.log('outside last ' + rezz)
            if (rezzNew != 'Keine KTA gefunden') {
                break;
            }
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////
////////////////////WORKING AWAIT STRUCTURE, NOT WORKING LOOP!!!!!!!!!!////////////////
///////////////////////////////////////////////////////////////////////////////////////
// module.exports = class CustomRefresh {
//     async command(button, text) {
//         let rezz = await browser.getText(text, async (result) => {
//             console.log('inside let ' + result.value)
//             return result.value;
//         });
//         console.log('outside first ' + rezz == 'Keine KTA gefunden')
//         do {
//             browser
//                 .customClick(button)
//                 .pause(5000)
//             console.count('Attempt: ')
//         }
//         while (rezz == 'Keine KTA gefunden')
//         console.log('outside second ' + rezz)
//     }
// }
//////////////////////////////////THE END//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////