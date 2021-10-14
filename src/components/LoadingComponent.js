import { useEffect, useRef, useState } from 'react';

function LoadingComponent({ theme, text }) {
  const [isError, setIsError] = useState(false);
  const errorRef = useRef(null);

  const clear = () => {
    if (errorRef.current) {
      clearTimeout(errorRef.current);
    }
  };

  useEffect(() => {
    errorRef.current = setTimeout(() => {
      setIsError(true);
    }, 10000);
    return () => {
      clear();
    };
  }, []);

  return !isError ? (
    <div
      className={`flex items-center flex-col sm:flex-row justify-center gap-4 col-span-full h-full row-span-full `}>
      <div
        className={`h-12 w-12 bg-transparent border-4 border-gray-300 border-r-blue-700  animate-spin rounded-full`}
        style={{ borderRightColor: '#1d4ed8' }}></div>
      <p className={`text-2xl text-gray-400`}>Loading {text}</p>
    </div>
  ) : (
    <p
      className={`text-xl font-thin col-span-full text-center mt-4 text-gray-400 `}>
      Error Loading {text}
    </p>
  );
}

export default LoadingComponent;
