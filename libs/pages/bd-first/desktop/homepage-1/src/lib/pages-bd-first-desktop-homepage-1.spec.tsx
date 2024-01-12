import { render } from '@testing-library/react';

import PagesBdFirstDesktopHomepage1 from './pages-bd-first-desktop-homepage-1';

describe('PagesBdFirstDesktopHomepage1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PagesBdFirstDesktopHomepage1 />);
    expect(baseElement).toBeTruthy();
  });
});
