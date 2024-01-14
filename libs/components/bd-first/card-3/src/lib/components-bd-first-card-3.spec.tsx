import { render } from '@testing-library/react';

import ComponentsBdFirstCard3 from './components-bd-first-card-3';

describe('ComponentsBdFirstCard3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsBdFirstCard3 />);
    expect(baseElement).toBeTruthy();
  });
});
