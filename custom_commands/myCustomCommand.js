module.exports = {
  before: function (browser) {

      //Declaring Global Timeout
      browser.globals.waitForConditionTimeout = 7000
  },

  'Loop through the table and print the names of the Company': function (browser) {
      browser
          // .url('https://www.w3schools.com/html/html_tables.asp')
          // .waitForElementVisible('#accept-choices')
          // .click('#accept-choices')
          // .waitForElementVisible('#customers')
          .elements('css selector', '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a > span > span > span', function (elements) {
              elements.value.forEach(function (elementsObj, index) {
                  browser.elementIdText(elementsObj.ELEMENT, function (result) {
                      if (index == index) {
                          console.log('\n' + result.value)
                      }
                  })
              })

          })
  },

  after: function (browser) {
      browser.end()
  }
}


// module.exports = class customShit {
//   command() {
//     var frame = 2;

//     for (var i = 0; i < frame.length; i++) {
//       console.log(i.value)
//     }
//   }
// }

// module.exports = {

//   'demo Test': function (browser) {
//     var n = 2;

//     for (var i = 0; i < n; i++) {
      // do something with each subframe as frames[i]
      // frames[i].document.body.style.background = "red";
  //     console.log(i.value)
  //   }
  // },

  // 'demo Test': function (browser) {
  //     browser.elements('css selector', '@detailsToolbar', function (result) {
  //         console.log(result.value)
  //     });
  // },

  // 'demo Test': function (browser) {
  //     browser.elements('css selector', '@detailsToolbar', function (browser) {
  //         browser.elementIdText(elementsObj.ELEMENT, function (result){
  //             if (index % 3 == 0) {
  //                 console.log('\n' + result.value)
  //             }
  //         })
  //     })
  // },


  //  'es6 async demo Test': async function(browser) {
  //    const result = await browser.elements('css selector', 'ul li');
  //    console.log('result value is:', result.value);
  //  },

  // 'page object demo Test': function (browser) {
  //     var nightwatch = browser.page.nightwatch();
  //     nightwatch
  //       .navigate()
  //       .assert.titleContains('Nightwatch.js');

  //     nightwatch.api.elements('@featuresList', function(result) {
  //       console.log(result);
  //     });

  //     browser.end();
  //  }
// }