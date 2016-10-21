import { browser, element, by } from 'protractor';

export class AngularHackDayBrisbane2016Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTableRows() {
    return element.all(by.id('item-row'));
  }

}
