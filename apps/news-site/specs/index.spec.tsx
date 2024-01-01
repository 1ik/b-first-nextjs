import React from 'react';
import { render } from '@testing-library/react';

import Category from '../pages/[category]';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Category />);
    expect(baseElement).toBeTruthy();
  });
});
