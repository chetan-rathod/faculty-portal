import { FacultyPortalPage } from './app.po';

describe('faculty-portal App', () => {
  let page: FacultyPortalPage;

  beforeEach(() => {
    page = new FacultyPortalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
