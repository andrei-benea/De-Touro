export default class AsyncDtIndex {
    url = 'https://qa.de-touro.de/Index';
    elements = {
        ktaFirstRow: '[data-recordindex="0"]',
        ktaGridBad: '[id="gridview-1250-body"]',
        ktaGrid: '[class="x-gridview-1250-table x-grid-table x-grid-with-col-lines"]',
        ktaGridRows: '[class="x-panel x-grid-with-col-lines x-grid-no-row-lines x-fit-item x-panel-default x-grid"]:nth-child(2) > div:nth-child(2) > div > table > tbody > tr',
        ktaGridRow: '[class="x-grid-row tour-grid-unread-row x-grid-data-row"]',
        ktaGridRowAlt: '[class="x-grid-row x-grid-row-alt tour-grid-unread-row x-grid-data-row"]',
        ukfDecideLaterButton: '[id="button-1021-btnEl"]',
    }
    async smartKtas() {
        return browser
            .smartKtas(this.elements.ktaGridRow)
    }
};