import {useEffect, useRef, useState} from 'react'

export default function useNearScreen({ distance = "100px", once = true } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      //console.log(el);
      if (el.isIntersecting) {
        setShow(true);
        // se desconecta el observer para que no se vuelva a ejecutar
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });
    observer.observe(fromRef.current);

    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
