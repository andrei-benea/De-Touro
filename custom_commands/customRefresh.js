module.exports = class CustomRefresh {
    async command(button, text) {
        let refresh = await browser.getText(text, async (result) => {
            return result.value;
        });
        if (refresh == 'Keine KTA gefunden') {
            console.log('KTA not present..Starting refresh loop...')
        }
        else {
            console.log('KTA identified!')
        }
        while (refresh == 'Keine KTA gefunden') {
            console.count('Attempt: ')
            browser
                .customClick(button)
                .pause(5000)
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