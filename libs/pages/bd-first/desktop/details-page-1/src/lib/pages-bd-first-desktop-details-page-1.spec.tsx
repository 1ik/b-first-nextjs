import { render } from '@testing-library/react';

import PagesBdFirstDesktopDetailsPage1 from './pages-bd-first-desktop-details-page-1';

describe('PagesBdFirstDesktopDetailsPage1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PagesBdFirstDesktopDetailsPage1 />);
    expect(baseElement).toBeTruthy();
  });
});
