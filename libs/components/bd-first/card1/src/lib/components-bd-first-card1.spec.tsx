import { render } from '@testing-library/react';

import ComponentsBdFirstCard1 from './components-bd-first-card1';

describe('ComponentsBdFirstCard1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsBdFirstCard1 />);
    expect(baseElement).toBeTruthy();
  });
});
