import { browser, element, by } from 'protractor';

export class RoleRestrictDirectiveAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
