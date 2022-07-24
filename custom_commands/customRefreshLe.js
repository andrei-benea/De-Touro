module.exports = class CustomRefreshLe {
    async command(button, text) {
        let refresh = await browser.getText(text, async (result) => {
            return result.value;
        });
        if (refresh == 'Keine KTA gefunden') {
            console.log('KTA not present..Starting refresh loop...')
        }
        else {
            console.log('KTA identified!')
            console.log(refresh.value)
        }
        while (refresh == 'Keine KTA gefunden') {
            console.count('Attempt: ')
            browser
                .specialClick(button)
                .pause(10000)
            let fresh = await browser.getText(text, async (result) => {
                return result.value;
            });
            if (fresh != 'Keine KTA gefunden') {
                console.log('KTA identified! Quitting refresh loop...')
                break;
            }
        }
    }
}