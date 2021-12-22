import { useEffect, useRef } from 'react';

// useSEO hook for apply title an description to the page
export default function useTitle({ description, title}) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'));

  useEffect(() => {
    const previousTitle = prevTitle.current;

    if (title) {
      document.title = `${title} | Giffy`
    }

    return () => {
      document.title = previousTitle;
    }
  }, [title])

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;

    if (description) {
      metaDescription.setAttribute('content', description);
    }

    return () =>  metaDescription.setAttribute('content', previousDescription)
  }, [description])

}