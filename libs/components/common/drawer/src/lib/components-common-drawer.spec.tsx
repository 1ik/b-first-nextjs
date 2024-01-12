import { render } from '@testing-library/react';

import ComponentsCommonDrawer from './components-common-drawer';

describe('ComponentsCommonDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsCommonDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
