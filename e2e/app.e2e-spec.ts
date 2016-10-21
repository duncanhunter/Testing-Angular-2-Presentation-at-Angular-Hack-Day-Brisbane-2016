import { element, by, browser } from 'protractor';

describe('App Page:', () => {
    it('should have a title of Cart Items', () => {
        browser.get('/');
        let title = element(by.tagName('h1')).getText();
        expect(title).toEqual('Cart Items');
    });
});