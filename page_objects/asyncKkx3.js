// import { credentials } from "../tests_input/loginInfoKt";

export default class AsyncKkx3 {
    url = 'https://check-kkx3.zhp-online.de/x3/de/';
    elements = {
        usernameInput: '#ext-comp-1020',
        passwordInput: '#ext-comp-1021',
        submitButton: '#ext-gen48',
        kkSwitchButton: '#ext-gen136',
        selectGroupInput: '#ext-comp-1037',
        kkDeTouroGroup: '#ext-comp-1033 > div > div:nth-child(33)',
    };
    commands = [{
        // setUser() {
        //     return this
        //         .setValue('@usernameInput', credentials.username)
        // },
        // setPass() {
        //     return this
        //         .setValue('@passwordInput', credentials.password)
        // },
        // login() {
        //     return this
        //         .click('@submitButton')
        // },
        // selectKkFromGroup() {
        //     return this
        //         .click('@kkSwitchButton')
        //         .click('@kkDeTouroGroup')
        //         .waitForElementVisible('@loggedInUser', 'User is logged in!')
        //         .pause(2000)
        // }
    }];
};