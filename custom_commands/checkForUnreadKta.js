// module.exports = class CheckForUnreadKta {
//     async command(element) {
//         const myPromise = new Promise
//     }
// }
////////////////////////////////////////////////////////
////// WORKING BUT NOT YET WHAT IT NEEDS TO BE//////////
////////////////////////////////////////////////////////
module.exports = class CheckForUnreadKta {
    async command(element) {
        browser
            .elements('css selector', element, async (objects) => {
                console.dir(objects)
            })
        console.log('Veriying Ktas...')
        return
    }
}