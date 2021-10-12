import { useEffect, useRef, useState } from 'react';
import uniqid from 'uniqid';

export function useImageCarouselData(delay) {
  const timeoutRef = useRef(null);

  const [imageObject] = useState([
    {
      id: uniqid(),
      src: 'https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80',
      alt: 'multiple kicks lying sideways',
    },
    {
      id: uniqid(),
      src: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      alt: 'close-up of orange/yellow air max on street',
    },
    {
      id: uniqid(),
      src: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1413&q=80',
      alt: 'pair nike air force 1 on a jacket',
    },
    {
      id: uniqid(),
      src: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      alt: 'multiple sneakers on a shelf from the rear',
    },
    {
      id: uniqid(),
      src: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1479&q=80',
      alt: 'white blue and green kicks in the street',
    },
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentImage((prevImage) =>
        prevImage === imageObject.length - 1 ? 0 : prevImage + 1
      );
    }, delay);
    return () => resetTimeout();
  }, [currentImage, imageObject, delay]);

  return [imageObject, currentImage];
}
