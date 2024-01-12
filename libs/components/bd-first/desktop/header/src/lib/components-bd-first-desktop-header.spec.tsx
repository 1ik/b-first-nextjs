import { render } from '@testing-library/react';

import ComponentsBdFirstDesktopHeader from './components-bd-first-desktop-header';

describe('ComponentsBdFirstDesktopHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsBdFirstDesktopHeader />);
    expect(baseElement).toBeTruthy();
  });
});
