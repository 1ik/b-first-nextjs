import { render } from '@testing-library/react';

import NewsSiteUi from './news-site-ui';

describe('NewsSiteUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsSiteUi />);
    expect(baseElement).toBeTruthy();
  });
});
