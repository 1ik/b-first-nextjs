import { render } from '@testing-library/react';

import PagesBdFirstDesktopCategoryPage1 from './pages-bd-first-desktop-category-page-1';

describe('PagesBdFirstDesktopCategoryPage1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PagesBdFirstDesktopCategoryPage1 />);
    expect(baseElement).toBeTruthy();
  });
});
