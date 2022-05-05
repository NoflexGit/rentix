import { useEffect } from "react";

const baseTitle = document.title;

const useDocumentTitle = (title: string, resetOnUnmount = true) => {
  useEffect(() => {
    document.title = `${baseTitle} | ${title}`;

    return () => {
      if (resetOnUnmount) {
        document.title = baseTitle;
      }
    };
  }, [title, resetOnUnmount]);
};

export default useDocumentTitle;
