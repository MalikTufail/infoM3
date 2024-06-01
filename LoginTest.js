
/**************************This test is working properly ************************/

import { Selector, ClientFunction } from 'testcafe';

const disableRightClickProtection = ClientFunction(() => {
    document.oncontextmenu = null;
    document.onkeydown = function (e) {
        if (e.keyCode === 123) {
            return false;
        }
    };
});
const pressF4 = ClientFunction(() => {
    const event = new KeyboardEvent('keydown', {
        key: 'F4',
        code: 'F4',
        keyCode: 115, // The keyCode for F4
        which: 115,
        bubbles: true
    });
    document.dispatchEvent(event);
});
const setZoom = ClientFunction((zoomLevel) => {
    document.body.style.zoom = zoomLevel;
});


fixture `My Fixture`
    .page `https://mingle-portal.eu1.inforcloudsuite.com/v2/LTTDCONSULTING_DEM/`
    .beforeEach(async t => {
        await t.resizeWindow(1366, 1080); // Resize window to a size where the element is visible
    });

test('My Test', async t => {
    await disableRightClickProtection();
    
    await t
        // .setPageLoadTimeout(0)
        // .maximizeWindow()
        .typeText('#userNameInput', 'Itecor2@lttd-consulting.Com')
        .typeText('#passwordInput', '49u2NsK9qEwfZ2')
        .click('#submitButton')
        .wait(40000)
        .pressKey('ctrl+r')
        const iframeSelector = Selector('iframe[class="osp-width-full osp-height-full"]')
        await t.switchToIframe(iframeSelector)
                .typeText('#search-and-start-autocomplete', 'OIS300')
                .wait(7000)
                // .click('#ac-list-option1 > a > span')
                .click('#autocomplete-list')
                // .wait(7000)
                .click('#WYQ0615')
                // .typeText('[class="lookup h5-lookup-input ng-pristine ng-valid ng-touched has-tooltip"]','Y11000')
                .typeText('#OAORTP', "F19")
                .click('#pRow9 > form > div:nth-child(2) > div > div:nth-child(2) > div > button')
                .click('#monthview-popup > div.tooltip-content > div > table > tbody > tr:nth-child(4) > td[aria-label="Friday, May 24, 2024"]')
                .typeText('#OAADID', 'SD1')
                .click('#btn-next')
                await t.setNativeDialogHandler(() => true);

                // Trigger the alert box (replace the selector with the actual trigger on your page)
                await t.click(Selector('#standard-btn-ok'));
                await t.click('#btn-next')
                        .click('#btn-next')
                       .click('#OADLSP')
                    //    .pressKey('F4')   
                await pressF4()
                await t
                // .wait(5000)
                       .click('#BROWSE_LIST > div.datagrid-wrapper.center.scrollable-x.scrollable-y > table > tbody > tr:nth-child(2)')
                       .click('#BTN_L52T23')
                       .typeText('#OADSTX', 'test2 Tosca 23/05/2024', { replace: true })
                       .click('#btn-next')
                       .click('#OAWCON')
                await pressF4()
                await t.click('#BROWSE_LIST > div.datagrid-wrapper.center.scrollable-x.scrollable-y > table > tbody > tr:nth-child(2)')
                        .click('#BTN_L52T23')
                        .click('#btn-next')
                        .click('#btn-next')
                        .typeText('#WBITNO', 'ITECOR-PIZZA')
                        .typeText('#WBORQA', '10')
                        .typeText('#WBSAPR', '5')
                        .click('#A_00434')
                        .typeText('#WBITNO', 'Y10056')
                        .typeText('#WBORQA', '5')
                        .typeText('#WBSAPR', '6')
                        .click('#A_00434')
                            // Accessing the shadow DOM
    const shadowHost = Selector('[class="tab-panel can-show is-visible"] [class="tab-panel-component expandable-area"] [class="instance-controller compact-mode"] [class="instance-panel-body-container splitter-container"] [class="instance-panel-body"] [id="instance-main-grid"] [class="h5-datagridwc light-variant"]');
    
    // Access the shadow root and the element within it
    const shadowElement = shadowHost.shadowRoot().find('[class="ids-data-grid-wrapper"] [class="ids-data-grid"] [class="ids-data-grid-body"] [class="ids-data-grid-row"] [class="ids-data-grid-cell align-left formatter-formatter"] [class="formatted-cell "]');
    
    await t
        .click(shadowElement)
        .pressKey('ctrl+2')
        .wait(5000)
}); 
// await setZoom('90%');
                        // await setZoom('80%')
                        // await setZoom('50%')
                        // await t
                        // .scrollIntoView('div > div > div > ids-data-grid-row > ids-data-grid-cell:nth-child(3) > div')
                        // .pressKey('ctrl + -')
                        // .pressKey('ctrl + -')
                        // .pressKey('ctrl + -')
                        // .pressKey('ctrl + -')

                        // .click('div[title="ITECOR-PIZZA, Availability check (21)"]')
                        // .click('div > div > div > ids-data-grid-row.ids-data-grid-row.selected > ids-data-grid-cell:nth-child(2) > div')
                            // .click('#tab_item_0 > div > h5-instance-controller > div.instance-controller.compact-mode > div.instance-panel-body-container.splitter-container > div.content.scrollable.no-scroll.flex-grow-shrink > div.instance-panel-body > div.instance-controller-body-container.full-width.scrollable.light-variant.instance-panel-body-content > div > div.h5-detail-panel-container > div > div')
                            // .switchToMainWindow()
/**************************** till there **********************************/



// import { Selector, ClientFunction } from 'testcafe';

// const disableRightClickProtection = ClientFunction(() => {
//     document.oncontextmenu = null;
//     document.onkeydown = function (e) {
//         if (e.keyCode === 123) {
//             return false;
//         }
//     };
// });

// fixture `My Fixture`
//     .page `https://mingle-portal.eu1.inforcloudsuite.com/v2/LTTDCONSULTING_DEM/`;

// test('My Test', async t => {
//     await disableRightClickProtection();
    
//     await t
//         // .setPageLoadTimeout(0)
//         .typeText('#userNameInput', 'Itecor2@lttd-consulting.Com')
//         .typeText('#passwordInput', '49u2NsK9qEwfZ2')
//         .click('#submitButton')
//         .wait(40000)
//         .pressKey('ctrl+r');

//     const iframeSelector = Selector('iframe[class="osp-width-full osp-height-full"]');
    
//     await t
//         .switchToIframe(iframeSelector)
//         .expect(iframeSelector.exists).ok('Iframe did not load')  // Wait for iframe to load
//         .typeText('#search-and-start-autocomplete', 'a');

//     const optionSelector = Selector('#ac-list-option1 > a > span');
    
//     await t
//         .expect(optionSelector.exists).ok('Search option did not appear')  // Wait for search option to appear
//         .click(optionSelector);
// });









// import { Selector } from 'testcafe';

// fixture `Login Test`
//     .page `https://mingle-portal.eu1.inforcloudsuite.com/v2/LTTDCONSULTING_DEM/`;

// test('User can login', async t => {
//     await t
//         .typeText('#userNameInput', 'Itecor2@lttd-consulting.Com')
//         .typeText('#passwordInput', '49u2NsK9qEwfZ2')
//         .click('#submitButton')
//         .wait(30000)
//         // .expect(Selector('.widget-header').exists).ok({ timeout:20000 })
//         .click("body > h5-root > ids-container > div.page-container > div.is-personalizable.module-tab.app-main-controller.tab-container.module-tabs > div.main-tab-list-container.tab-list-container > ul > li.tab.application-menu-trigger > a")
//         .pressKey('ctrl+r')
//         .wait(30000)
// });
// import { Selector, ClientFunction } from 'testcafe';
// const { expect } = require('chai');
// const pressCtrlR = ClientFunction(() => {
//     const event = new KeyboardEvent('keydown', {
//         bubbles: true,
//         cancelable: true,
//         keyCode: 82, // 'R' key code
//         ctrlKey: true
//     });
//     document.dispatchEvent(event);
// });

// fixture `Login Test`
//     .page `https://mingle-portal.eu1.inforcloudsuite.com/v2/LTTDCONSULTING_DEM/`;

//     test('User can login and press Ctrl+R', async t => {
//         const pressCtrlRBound = pressCtrlR.with({ boundTestRun: t });
//         await t
//             .typeText('#userNameInput', 'Itecor2@lttd-consulting.Com')
//             .typeText('#passwordInput', '49u2NsK9qEwfZ2')
//             .click('#submitButton')
//             .wait(20000)
//             .expect(Selector('.widget-header').exists).ok({ timeout:20000 })
//             .then(() => pressCtrlRBound()) // Call pressCtrlRBound within then
//             .then(async () => {
//                 const actualTitleText = await Selector('#h1-title').with({ boundTestRun: t }).textContent; // Bind t here
//                 return expect(actualTitleText).includes('Search and Start', { timeout: 10000 });
//               });
//     });