import { EventHostBootstrapNg2UiPage } from './app.po';

describe('event-host-bootstrap-ng2-ui App', function() {
  let page: EventHostBootstrapNg2UiPage;

  beforeEach(() => {
    page = new EventHostBootstrapNg2UiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
