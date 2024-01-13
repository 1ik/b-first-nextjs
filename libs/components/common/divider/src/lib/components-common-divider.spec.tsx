import { render } from '@testing-library/react';

import ComponentsCommonDivider from './components-common-divider';

describe('ComponentsCommonDivider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsCommonDivider />);
    expect(baseElement).toBeTruthy();
  });
});
