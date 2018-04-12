import { ETABotSourceAngularPage } from './app.po';

describe('etabot-source-angular App', () => {
  let page: ETABotSourceAngularPage;

  beforeEach(() => {
    page = new ETABotSourceAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
