import { CV2Page } from './app.po';

describe('cv2 App', () => {
  let page: CV2Page;

  beforeEach(() => {
    page = new CV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
