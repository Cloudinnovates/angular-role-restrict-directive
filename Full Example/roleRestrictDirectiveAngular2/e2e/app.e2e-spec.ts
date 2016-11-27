import { RoleRestrictDirectiveAngular2Page } from './app.po';

describe('role-restrict-directive-angular2 App', function() {
  let page: RoleRestrictDirectiveAngular2Page;

  beforeEach(() => {
    page = new RoleRestrictDirectiveAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
