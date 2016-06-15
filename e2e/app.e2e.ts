import { JenHeropPage } from './app.po';

describe('jen-herop App', function() {
  let page: JenHeropPage;

  beforeEach(() => {
    page = new JenHeropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jen-herop works!');
  });
});
