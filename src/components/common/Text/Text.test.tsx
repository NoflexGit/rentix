import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Text, { IProps } from './Text';

const testId = 'test-id';

describe('Headline', () => {
  describe('Snapshots tests', () => {
    it('should match snapshot', () => {
      expect(render(<Text />)).toMatchSnapshot();
    });

    it('should use a children', () => {
      expect(render(<Text>Test</Text>)).toMatchSnapshot();
    });
  });

  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(<Text dataTestId={testId} />);

      expect(getByTestId(testId).tagName).toBe('SPAN');
    });
  });

  describe('Classes tests', () => {
    it('should set class `medium` as default size class', () => {
      const { container } = render(<Text />);

      expect(container.firstElementChild).toHaveClass('medium');
    });

    it('should set class `regular` as default weight class', () => {
      const { container } = render(<Text />);

      expect(container.firstElementChild).toHaveClass('regular');
    });

    it('should set `size` class', () => {
      const sizes: Array<IProps['size']> = ['small', 'medium', 'large'];

      sizes.forEach((size) => {
        if (!size) return;

        const { container } = render(<Text size={size} />);
        expect(container.firstElementChild).toHaveClass(size);
      });
    });

    it('should set `weight` class', () => {
      const sizes: Array<IProps['weight']> = ['bold', 'regular'];

      sizes.forEach((weight) => {
        if (!weight) return;

        const { container } = render(<Text weight={weight} />);
        expect(container.firstElementChild).toHaveClass(weight);
      });
    });

    it('should set `className` class', () => {
      const className = 'test-className';
      const { container } = render(<Text className={className} />);

      expect(container.firstElementChild).toHaveClass(className);
    });
  });

  it('should set a correct tag', () => {
    const { container, rerender } = render(<Text />);
    const tags: Array<IProps['tag']> = ['div', 'p', 'span'];

    tags.forEach((tag) => {
      if (!tag) return;
      const tagToFind = tag.toUpperCase();

      rerender(<Text tag={tag} />);
      expect(container.firstElementChild?.nodeName).toEqual(tagToFind);
    });
  });

  it('should unmounts without error', () => {
    const { unmount } = render(<Text>Example</Text>);

    expect(unmount).not.toThrowError();
  });
});
