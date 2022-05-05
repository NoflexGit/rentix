import React from 'react';
import { render } from '@testing-library/react';

import Col from './Col';

const testId = 'test-id';

describe('Col', () => {
  describe('Snapshots tests', () => {
    it('should match snapshot', () => {
      const { container } = render(<Col>Example</Col>);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-className';

      const { container } = render(<Col className={className} />);

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set width class', () => {
      const { container } = render(<Col width={{ xs: 12, sm: 5, md: 3 }} />);

      expect(container.firstElementChild).toHaveClass('width-xs-12 width-sm-5 width-md-3');
    });
  });

  it('should set `data-test-id` attribute to col', () => {
    const { getByTestId } = render(<Col dataTestId={testId} />);

    expect(getByTestId(testId).tagName).toBe('DIV');
  });

  it('should set a correct tag', () => {
    const { getByTestId } = render(<Col tag="article" dataTestId={testId} />);

    expect(getByTestId(testId).tagName).toBe('ARTICLE');
  });
});
