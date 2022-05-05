import React from 'react';
import { render } from '@testing-library/react';
import { Col, Row } from '../index';

const testId = 'test-id';

describe('Row', () => {
  describe('Snapshots tests', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Row>
          <Col>Example</Col>
        </Row>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-className';

      const { container } = render(<Row className={className} />);

      expect(container.firstElementChild).toHaveClass(className);
    });
  });

  it('should set `data-test-id` attribute to col', () => {
    const { getByTestId } = render(<Row dataTestId={testId} />);

    expect(getByTestId(testId).tagName).toBe('DIV');
  });

  it('should set a correct tag', () => {
    const { getByTestId } = render(<Row tag="article" dataTestId={testId} />);

    expect(getByTestId(testId).tagName).toBe('ARTICLE');
  });
});
