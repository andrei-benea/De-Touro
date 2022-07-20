module.exports = class CustomEnvSwitch {
    async command(url) {
        await browser
            .navigateTo(url)
            .pause(5000)
            .assert.urlContains(url)
    }
}