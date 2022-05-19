module.exports = class SmartKtas {
    async command(unreadRowAlt) {
        browser
            .pause(2000)
            // .elements('css selector', unreadRow, (object) => {
            //     return new Promise((resolve) => {
            //         let items = object[Object.keys(object)[0]]
            //         console.dir(items.length)
            //         resolve(function(){

            //         })
            //     })
            // })
            .elements('css selector', unreadRowAlt, (object) => {
                return new Promise((resolve) => {
                    let items = object[Object.keys(object)[0]]
                    console.dir(items.length)
                    resolve(items)
                })
            })
    }
}