import { AccountBoostrapNg2UiPage } from './app.po';

describe('account-boostrap-ng2-ui App', function() {
  let page: AccountBoostrapNg2UiPage;

  beforeEach(() => {
    page = new AccountBoostrapNg2UiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
