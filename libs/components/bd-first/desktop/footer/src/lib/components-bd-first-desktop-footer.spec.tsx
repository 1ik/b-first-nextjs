import { render } from '@testing-library/react';

import ComponentsBdFirstDesktopFooter from './components-bd-first-desktop-footer';

describe('ComponentsBdFirstDesktopFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsBdFirstDesktopFooter />);
    expect(baseElement).toBeTruthy();
  });
});
