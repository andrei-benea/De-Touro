module.exports = class CustomRefreshKt {
    async command(button, element) {
        let refresh = await browser.isVisible({selector: element, suppressNotFoundErrors: 1}, async (result) => {
            return result.status
        });
        if (refresh != -1) {
            console.log('KTA identified!')
        }
        else {
            console.log('KTA not present..Starting refresh loop...')
        }
        while (refresh == 0 || refresh == 1) {
            console.count('Attempt: ')
            browser
                .specialClick(button)
                .pause(5000)
            let fresh = await browser.isVisible({selector: element, suppressNotFoundErrors: 1}, async (result) => {
                return result.status;
            });
            if (fresh == -1) {
                console.log('KTA identified! Quitting refresh loop...')
                break;
            }
        }
    }
}