import { FitnessAppPage } from './app.po';

describe('fitness-app App', () => {
  let page: FitnessAppPage;

  beforeEach(() => {
    page = new FitnessAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
