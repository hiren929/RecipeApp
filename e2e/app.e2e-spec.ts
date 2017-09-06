import { CookTheCodePage } from './app.po';

describe('cook-the-code App', () => {
  let page: CookTheCodePage;

  beforeEach(() => {
    page = new CookTheCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
