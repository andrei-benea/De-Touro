module.exports = class CustomRefresh {
    async command(button, element) {
        let refresh = await browser.isVisible(element, async (result) => {
            console.log(result.status)
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
                .customClick(button)
                .pause(5000)
            let fresh = await browser.isVisible(element, async (result) => {
                return result.status;
            });
            if (fresh == -1) {
                console.log('KTA identified! Quitting refresh loop...')
                break;
            }
        }
    }
}