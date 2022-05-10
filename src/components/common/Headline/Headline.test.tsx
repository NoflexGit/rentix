import React from "react";
import { getByTestId, render } from "@testing-library/react";
import Headline, { IProps } from "./Headline";

const testId = "test-id";

describe("Headline", () => {
  describe("Snapshots tests", () => {
    it("should match snapshot", () => {
      expect(render(<Headline />)).toMatchSnapshot();
    });

    it("should use a children", () => {
      expect(render(<Headline>Test</Headline>)).toMatchSnapshot();
    });
  });

  describe("Attributes tests", () => {
    it("should set `data-test-id` attribute", () => {
      const { getByTestId } = render(<Headline dataTestId={testId} />);

      expect(getByTestId(testId).tagName).toBe("DIV");
    });
  });

  describe("Classes tests", () => {
    it("should set class `bold` as default size class", () => {
      const { container } = render(<Headline />);

      expect(container.firstElementChild).toHaveClass("bold");
    });

    it("should set class `regular` as default weight class", () => {
      const { container } = render(<Headline />);

      expect(container.firstElementChild).toHaveClass("large");
    });

    it("should set `size` class", () => {
      const sizes: Array<IProps["size"]> = ["small", "large"];

      sizes.forEach((size) => {
        if (!size) return;

        const { container } = render(<Headline size={size} />);
        expect(container.firstElementChild).toHaveClass(size);
      });
    });

    it("should set `weight` class", () => {
      const sizes: Array<IProps["weight"]> = ["bold", "regular"];

      sizes.forEach((weight) => {
        if (!weight) return;

        const { container } = render(<Headline weight={weight} />);
        expect(container.firstElementChild).toHaveClass(weight);
      });
    });

    it("should set `className` class", () => {
      const className = "test-className";
      const { container } = render(<Headline className={className} />);

      expect(container.firstElementChild).toHaveClass(className);
    });
  });

  it("should set a correct tag", () => {
    const { container, rerender } = render(<Headline />);
    const tags: Array<IProps["tag"]> = ["div", "h1", "h2", "h3"];

    tags.forEach((tag) => {
      if (!tag) return;
      const tagToFind = tag.toUpperCase();

      rerender(<Headline tag={tag} />);
      expect(container.firstElementChild?.nodeName).toEqual(tagToFind);
    });
  });

  it("should unmounts without error", () => {
    const { unmount } = render(<Headline>Example</Headline>);

    expect(unmount).not.toThrowError();
  });
});
