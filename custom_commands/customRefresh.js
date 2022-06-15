module.exports = class CustomRefresh {
    async command(text, button) {
        let i = 1;
        while (i = 1) {
            browser
                .customClick(button)
                .pause(300)
                .getText(text, async (result) => {
                    if (result != 'Keine KTA gefunden') {
                        console.log('KTA identified!')
                        i++
                    }
                    else
                        console.log('KTA not found... retrying..')
                    return
                })
        }
    }
}