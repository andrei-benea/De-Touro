module.exports = {
    url: 'https://check-kkx3.zhp-online.de/x3/de/',

    elements: {
        usernameInput: '#ext-comp-1020',
        passwordInput: '#ext-comp-1021',
        submitButton: '#ext-gen48',
        kkSwitchButton: '#ext-gen136',
        selectGroupInput: '#ext-comp-1037',
        kkDeTouroGroup: '#ext-comp-1033 > div > div:nth-child(33)',
        loggedInUser: '#ext-comp-1181',
        treeDeTouro: '#ext-gen50 > div > li:nth-child(2) > div',
        frame: '[name="FDLiFrame"]',
        deTouroKta: '#aspnetForm',
        ktaIcon: '#ctl00_MainContent_Image1'
    },

    commands: [{
        setUser() {
            const username = 'zhp.benea'
            return this
                .setValue('@usernameInput', username);
        },
        setPass() {
            const password = 'ungam+30'
            return this
                .setValue('@passwordInput', password);
        },
        login() {
            return this
                .click('@submitButton');
        },
        selectGroup() {
            return this
                .click('@kkSwitchButton')
                .click('@kkDeTouroGroup');
        },
        loadDeTouro() {
            return this
                .click('@treeDeTouro')
        },
        switchToGroupKk() {
            return this
                .click('@kkSwitchButton')
        },
        selectDeTouroFromGroup() {
            return this
                .click('@kkDeTouroGroup')
        },
        //Additional optional functions.. Keep for later.
        getFrameSrc() {
            return this
                .getElementProperty('@frame', 'src', src => {
                    console.log(src.value)
                }
                )
        },
        setFrameAttribute() {
            return this
                .setAttribute('@frame', 'id', '0', function (result) {
                    console.log('result', result);
                });
        }
    }]
}