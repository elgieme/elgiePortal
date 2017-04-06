import { browser, element, by } from 'protractor';

export class AccountBoostrapNg2UiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
