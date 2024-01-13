import { render } from '@testing-library/react';

import ComponentsBdFirstCard2 from './components-bd-first-card-2';

describe('ComponentsBdFirstCard2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsBdFirstCard2 />);
    expect(baseElement).toBeTruthy();
  });
});
