export class JenHeropPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jen-herop-app h1')).getText();
  }
}
