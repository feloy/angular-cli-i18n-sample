import { AngularCliI18nSamplePage } from './app.po';

describe('angular-cli-i18n-sample App', () => {
  let page: AngularCliI18nSamplePage;

  beforeEach(() => {
    page = new AngularCliI18nSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
