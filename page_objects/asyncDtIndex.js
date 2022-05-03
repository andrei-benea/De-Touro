export default class AsyncDtIndex {
    url = 'https://qa.de-touro.de/Index';
    elements = {
        ktaFirstRow: '[data-recordindex="0"]',
        ktaGrid: '[id="gridview-1267-body"]',
        ktaGrid2: '[class="x-panel x-grid-with-col-lines x-grid-no-row-lines x-fit-item x-panel-default x-grid"]:nth-child(2) > div:nth-child(2) > div > table > tbody',
        ktaGridRows: '[class="x-panel x-grid-with-col-lines x-grid-no-row-lines x-fit-item x-panel-default x-grid"]:nth-child(2) > div:nth-child(2) > div > table > tbody > tr',
        ukfDecideLaterButton: '[id="button-1021-btnEl"]',
    }
    async smartKtas() {
        return browser
            // .customClick(this.elements.ukfDecideLaterButton)
            .smartKtas(this.elements.ktaGridRows)
    }
};