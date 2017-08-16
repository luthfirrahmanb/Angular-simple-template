import { AngularW3MaterialPage } from './app.po';

describe('angular-w3-material App', () => {
  let page: AngularW3MaterialPage;

  beforeEach(() => {
    page = new AngularW3MaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
