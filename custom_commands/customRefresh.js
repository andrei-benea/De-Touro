module.exports = class CustomRefresh {
    async command(button) {
        let i = 1;
        while (i <= 2) {
            let myPromise = new Promise(function (myResolve, myReject) {
                browser
                    .customClick(button)
                    .pause(500)
                    .waitForFirstXHR('', 1000, function browserTrigger() {
                        browser.click(button)
                    },
                        function assertValues(xhr) {
                            let data = xhr.responseData;
                            let parsed = JSON.parse(data);
                            // console.log(parsed);
                            console.log('Nr. of KTAs identified: ' + parsed.TotalRecords)
                            if (parsed.TotalRecords === 1) {
                                myResolve(parsed.TotalRecords)
                            }
                            else {
                                myReject('Rejecting promise...')
                            }
                        }
                    )
            });
            myPromise.then(
                function(value) {
                    console.log(value)
                },
                function(error) {
                    console.log(error)
                }
            )
            // browser
            //     .customClick(button)
            //     .pause(500)
            //     .waitForFirstXHR('', 1000, function browserTrigger() {
            //         browser.click(button)
            //     },
            //         function assertValues(xhr) {
            //             // browser.assert.equal(xhr.status, "success");
            //             // browser.assert.equal(xhr.method, "POST");
            //             // browser.assert.equal(xhr.requestData, "200");
            //             // browser.assert.equal(xhr.httpResponseCode, "200");
            //             // browser.assert.equal(xhr.responseData, "");
            //             let data = xhr.responseData
            //             // console.log(data)
            //             let parsed = JSON.parse(data)
            //             // console.log(parsed)
            //             console.log('Nr. of KTAs identified: ' + parsed.TotalRecords)
            //         })
            console.log('Trying....: ' + i);
            i++;
        }
    }
}