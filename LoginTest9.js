import { Selector, ClientFunction } from 'testcafe';
import selectors from './Selectors';
const pressCtrl4And3 = ClientFunction(() => {
    // Create and dispatch the "Ctrl+4" event
    const ctrl4Event = new KeyboardEvent('keydown', {
        key: '4',
        code: 'Digit4',
        keyCode: 52,
        which: 52,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(ctrl4Event);

    // Release the "4" key
    const ctrl4UpEvent = new KeyboardEvent('keyup', {
        key: '4',
        code: 'Digit4',
        keyCode: 52,
        which: 52,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(ctrl4UpEvent);

    // Create and dispatch the "3" event
    const key3Event = new KeyboardEvent('keydown', {
        key: '3',
        code: 'Digit3',
        keyCode: 51,
        which: 51,
        bubbles: true
    });
    document.dispatchEvent(key3Event);

    // Release the "3" key
    const key3UpEvent = new KeyboardEvent('keyup', {
        key: '3',
        code: 'Digit3',
        keyCode: 51,
        which: 51,
        bubbles: true
    });
    document.dispatchEvent(key3UpEvent);
});
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
const pressF3 = ClientFunction(() => {
    const event = new KeyboardEvent('keydown', {
        key: 'F3',
        code: 'F3',
        keyCode: 114, // The keyCode for F4
        which: 114,
        bubbles: true
    });
    document.dispatchEvent(event);
});

const pressF10 = ClientFunction(() => {
    const event = new KeyboardEvent('keydown', {
        key: 'F10',
        code: 'F10',
        keyCode: 121, // The keyCode for F10
        which: 121,
        bubbles: true
    });
    document.dispatchEvent(event);
});

const setZoom = ClientFunction((zoomLevel) => {
    document.body.style.zoom = zoomLevel;
});

const selectDateTwoDaysAhead = ClientFunction(() => {
    const today = new Date();
    let targetDate = new Date(today);
    targetDate.setDate(today.getDate() + 2);
    if (targetDate.getDay() === 0) {
        targetDate.setDate(targetDate.getDate() + 1);
    }
    const formattedDate = targetDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dateCells = document.querySelectorAll("#monthview-popup .tooltip-content table tbody tr td[aria-label]");
    for (const cell of dateCells) {
        if (cell.getAttribute('aria-label') === formattedDate) {
            cell.click();
            break;
        }
    }
});
const pressCtrl11 = ClientFunction(() => {
    // Hold down the "Ctrl" key
    const ctrlKeyDownEvent = new KeyboardEvent('keydown', {
        key: 'Control',
        code: 'ControlLeft',
        keyCode: 17,
        which: 17,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(ctrlKeyDownEvent);

    // Create and dispatch the first "1" event
    const ctrl1Event = new KeyboardEvent('keydown', {
        key: '1',
        code: 'Digit1',
        keyCode: 49,
        which: 49,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(ctrl1Event);

    // Release the first "1" key
    const ctrl1UpEvent = new KeyboardEvent('keyup', {
        key: '1',
        code: 'Digit1',
        keyCode: 49,
        which: 49,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(ctrl1UpEvent);

    // Create and dispatch the second "1" event
    const key1Event = new KeyboardEvent('keydown', {
        key: '1',
        code: 'Digit1',
        keyCode: 49,
        which: 49,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(key1Event);

    // Release the second "1" key
    const key1UpEvent = new KeyboardEvent('keyup', {
        key: '1',
        code: 'Digit1',
        keyCode: 49,
        which: 49,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(key1UpEvent);

    // Release the "Ctrl" key
    const ctrlKeyUpEvent = new KeyboardEvent('keyup', {
        key: 'Control',
        code: 'ControlLeft',
        keyCode: 17,
        which: 17,
        ctrlKey: false,
        bubbles: true
    });
    document.dispatchEvent(ctrlKeyUpEvent);
});

const pressCtrl14 = ClientFunction(() => {
    // Create and dispatch the "Ctrl+1" event
    const ctrl1Event = new KeyboardEvent('keydown', {
        key: '1',
        code: 'Digit1',
        keyCode: 49,
        which: 49,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(ctrl1Event);

    // Release the "1" key
    const ctrl1UpEvent = new KeyboardEvent('keyup', {
        key: '1',
        code: 'Digit1',
        keyCode: 49,
        which: 49,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(ctrl1UpEvent);

    // Create and dispatch the "Ctrl+4" event
    const ctrl4Event = new KeyboardEvent('keydown', {
        key: '4',
        code: 'Digit4',
        keyCode: 52,
        which: 52,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(ctrl4Event);

    // Release the "4" key
    const ctrl4UpEvent = new KeyboardEvent('keyup', {
        key: '4',
        code: 'Digit4',
        keyCode: 52,
        which: 52,
        ctrlKey: true,
        bubbles: true
    });
    document.dispatchEvent(ctrl4UpEvent);
});

const getCurrentDateFormatted = ClientFunction(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
    const yyyy = today.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
});

fixture`My Fixture`
    .page`https://mingle-portal.eu1.inforcloudsuite.com/v2/LTTDCONSULTING_DEM/`
    // .beforeEach(async t => {
    //     await t.resizeWindow(1366, 1080); // Resize window to a size where the element is visible
    // });

test('My Test', async t => {
    await disableRightClickProtection();
    await t
    .maximizeWindow()
        .typeText(selectors.login.userName, 'Itecor2@lttd-consulting.Com')
        .typeText(selectors.login.password, '49u2NsK9qEwfZ2')
        .click(selectors.login.submitBtn)
        .wait(25000)
    const iframeSelector = Selector(selectors.dashboard.iframeSel);
    await t.switchToIframe(iframeSelector)
    // const dashboardAssert = Selector('#start-page > h5-start-page-container > div > div:nth-child(1) > h5-widget > div > div > div > div.widget-header > h2 > span.widget-header-text.widget-title').with({ visibilityCheck: true })

    // const elementText = (await dashboardAssert.innerText).trim();

    // // Use an assertion to verify the text content
    // await t.expect(elementText).eql('Favorites', 'The text content does not match the expected value')
    //     // .wait(50000)
        .pressKey('ctrl+r');
    const searchField = Selector(selectors.dashboard.searchOIS);
    const searchResult = Selector(selectors.dashboard.selectOIS);
    const noResultMessage = Selector(selectors.dashboard.selectOIS).withText('no result');
    async function searchOIS300() {
        await t
            .typeText(searchField, 'OIS300')
            // .wait(7000);

        if (await noResultMessage.exists) {
            await t
                .selectText(searchField)
                .pressKey('delete')
                .typeText(searchField, 'OIS300')
                // .wait(7000);
        }
    }
    await searchOIS300();

    if (await searchResult.exists) {
        await t
            .click(searchResult)
            // .wait(4000);
    } else {
        console.error('OIS300 not found even after retrying');
    }
    // await t
    //     .typeText(selectors.dashboard.searchOIS, 'OIS300')
    //     .wait(7000)
    //     .click(selectors.dashboard.selectOIS)
    //     .wait(4000)
    await t.click(selectors.dashboard.newOrderBtn)
        .typeText(selectors.dashboard.COType, "F19")
        .click(selectors.dashboard.dateIcon);

    await selectDateTwoDaysAhead();

    const currentDate = await getCurrentDateFormatted();

    await t
        .typeText(selectors.dashboard.addressNo, 'SD1')
        .click(selectors.dashboard.nextBtn);

    await t.setNativeDialogHandler(() => true);
    await t.click(Selector(selectors.dashboard.alertBox));
    await t.click(selectors.dashboard.nextBtn)
        .click(selectors.dashboard.nextBtn)
        .click(selectors.paymentAndCondition.deliverySpec);

    await pressF4();

    await t
        .click(selectors.paymentAndCondition.deliveryItem)
        .click(selectors.paymentAndCondition.selectValue)
        .typeText(selectors.paymentAndCondition.deliverySpecType, `test2 Tosca ${currentDate}`, { replace: true })
        .click(selectors.dashboard.nextBtn)
        .click(selectors.reference.contactMethod);

    await pressF4();

    await t
        .click(selectors.reference.contactMethodItem)
        .click(selectors.paymentAndCondition.selectValue)
        .click(selectors.dashboard.nextBtn)
        .click(selectors.dashboard.nextBtn)
        .typeText(selectors.activity.item, 'ITECOR-PIZZA')
        .typeText(selectors.activity.orderQuantity, '10')
        .typeText(selectors.activity.salesPrice, '5')
        .click(selectors.activity.addBtn)
        .typeText(selectors.activity.item, 'Y10056')
        .typeText(selectors.activity.orderQuantity, '5')
        .typeText(selectors.activity.salesPrice, '6')
        .click(selectors.activity.addBtn)
    const shadowHost = Selector(() => document.querySelector('[class="tab-panel can-show is-visible"] [class="tab-panel-component expandable-area"] [class="instance-controller compact-mode"] [class="instance-panel-body-container splitter-container"] [class="instance-panel-body"] [id="instance-main-grid"] [class="h5-datagridwc light-variant"] ').shadowRoot.querySelector('[class="ids-data-grid-wrapper"] [class="ids-data-grid"] [class="ids-data-grid-body"] [class="ids-data-grid-row"]:nth-child(1)'));
    await t.click(shadowHost)
        .pressKey('ctrl+2')
        // .wait(5000)
        .typeText('#WBDIP1', '10', { replace: true })
        // .wait(3000)
        .click(selectors.dashboard.nextBtn)
    await pressF3();
    // await t.wait(3000)
    const customerAssert = Selector('#pRow2 > form[class="ng-untouched ng-pristine ng-valid"] > div > div[class="conditional-style-container has-tooltip has-cs-style"] > div:nth-child(2) > h3').with({ visibilityCheck: true })

    const customerText = (await customerAssert.innerText).trim();

    await t.expect(customerText).eql('Customer Order', 'The text content does not match the expected value')
    await t
        .click(selectors.dashboard.nextBtn)
        // .wait(5000)
    await pressF3();
    const shadowHostOIS300 = Selector(() => document.querySelector('#instance-main-grid > div > ids-data-grid').shadowRoot.querySelector('div[class="ids-data-grid-wrapper"] div[class="ids-data-grid"] div[class="ids-data-grid-body"] ids-data-grid-row.ids-data-grid-row'));
    await t
        .click(shadowHostOIS300)
        // .wait(5000)
        // await pressCtrl4And3();
        .pressKey('ctrl+4+3')

    // .pressKey('3')
    // await t.wait(7000)
    const MWS410Assert = Selector('a').withText('MWS410 Delivery. Open Toolbox').with({ visibilityCheck: true })

    const MS4Text = (await MWS410Assert.innerText).trim();

    // Use an assertion to verify the text content
    await t.expect(MS4Text).eql('MWS410 Delivery. Open Toolbox', 'The text content does not match the expected value')
    // .wait(5000)
    const shadowHostMWS410 = Selector(() => document.querySelector('#instance-main-grid > div > ids-data-grid').shadowRoot.querySelector('div[class="ids-data-grid-wrapper"] div[class="ids-data-grid"] div[class="ids-data-grid-body"] ids-data-grid-row.ids-data-grid-row:nth-child(1)'))
    await t
        .click(shadowHostMWS410)
        // .wait(3000)
        // .pressKey('ctrl+1 +1')
    await pressCtrl11();

    //    await  t.debug()
       await t .wait(2000)
    const shadowHostSfx = Selector(() => document.querySelector('#instance-main-grid > div > ids-data-grid').shadowRoot.querySelector('div[class="ids-data-grid-wrapper"] div[class="ids-data-grid"] div[class="ids-data-grid-body"] ids-data-grid-row.ids-data-grid-row:nth-child(1)'))
    await t
        .click(shadowHostSfx)
    await pressCtrl11();
    await t.wait(2000)
    // await  t.debug()
    const shadowHostYRA0101 = Selector(() => document.querySelector('#instance-main-grid > div > ids-data-grid').shadowRoot.querySelector('div[class="ids-data-grid-wrapper"] div[class="ids-data-grid"] div[class="ids-data-grid-body"] ids-data-grid-row.ids-data-grid-row:nth-child(1)'));
    await t
        .click(shadowHostYRA0101)
    await pressCtrl11();
    await t
        .wait(2000)
        // const shadowSelector = Selector(() => {
        //     const hostElement = document.querySelector('#instance-main-grid > div > ids-data-grid');
        //     const shadowRoot = hostElement.shadowRoot;
        //     return shadowRoot.querySelector('div[class="ids-data-grid-wrapper"] div[class="ids-data-grid"] div[class="ids-data-grid-body"] ids-data-grid-row.ids-data-grid-row:nth-child(1) ids-data-grid-cells[class="ids-data-grid-cell is-input is-uppercase align-right formatter-text is-editable is-inline"]:nth-child(9)')
        //         .shadowRoot.querySelector('[id="-input"]');
        // });
        const shadowHostQty = Selector(() => document.querySelector('#instance-main-grid > div > ids-data-grid').shadowRoot.querySelector('div[class="ids-data-grid-wrapper"] div[class="ids-data-grid"] div[class="ids-data-grid-body"] ids-data-grid-row.ids-data-grid-row:nth-child(1) ids-data-grid-cell[class="ids-data-grid-cell is-input is-uppercase align-right formatter-text is-editable is-inline"]:nth-child(9)'));

        await t
            .wait(2000)
            .click(shadowHostQty);
        
        const shadowHostQtyInputField = Selector(() => document.querySelector('#instance-main-grid > div > ids-data-grid').shadowRoot.querySelector('div > div > div > ids-data-grid-row > ids-data-grid-cell.ids-data-grid-cell.is-input.is-uppercase.align-right.formatter-text.is-editable.is-inline.is-editing > ids-input').shadowRoot.querySelector('#-input'))
        
        await t
            .typeText(shadowHostQtyInputField, '10')
            .click('[id="list-btn-default"]');
        await pressF3();
        const MWS422Assert = Selector('a').withText('MWS422 Picking List. Report Lines').with({ visibilityCheck: true })

    const Mws422Text = (await MWS422Assert.innerText).trim()

    // Use an assertion to verify the text content
    await t.expect(Mws422Text).eql('MWS422 Picking List. Report Lines', 'The text content does not match the expected value')
    const shadowHost114 = Selector(() => document.querySelector('#instance-main-grid > div > ids-data-grid').shadowRoot.querySelector('div[class="ids-data-grid-wrapper"] div[class="ids-data-grid"] div[class="ids-data-grid-body"] ids-data-grid-row.ids-data-grid-row:nth-child(1)'));
    await t.click(shadowHost114);
    // await pressCtrl14();
    await t.pressKey('ctrl+1+4')
    await t.wait(2000)
    await pressF10()
    await t.click('#W1PACT')
    await pressF4()
    await t
        .click('#BROWSE_LIST > div.datagrid-wrapper.center.scrollable-x.scrollable-y > table > tbody > tr:nth-child(2)')
        .click('#BTN_L52T23')
        .click('#W1PACT')
        .pressKey('enter');
    await pressF3();
        await t.click(selectors.dashboard.nextBtn)
    // await t.debug()
    for(var i =1; i < 4; i++){
        await pressF3();
        await t.wait(1000)
    }

    const MWSOIS300 = Selector('a').withText(' OIS300 Customer Order. Open Toolbox ').with({ visibilityCheck: true })

    const MWSOISText = (await MWSOIS300.innerText)

    // Use an assertion to verify the text content
    await t.expect(MWSOISText).eql(' OIS300 Customer Order. Open Toolbox ', 'The text content does not match the expected value')
    // await pressF3();
    // await pressF3();
    await t.debug()
});
