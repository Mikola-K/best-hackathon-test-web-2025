import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

export const useMediaQueries = () => {
  const [isClient, setIsClient] = useState(false);

  const isSddScreen = useMediaQuery({ query: '(min-width: 345px)' });
  const isSdScreen = useMediaQuery({ query: '(min-width: 375px)' });
  const isSdgScreen = useMediaQuery({ query: '(min-width: 400px)' });
  const isSgScreen = useMediaQuery({ query: '(min-width: 425px)' });
  const isSggScreen = useMediaQuery({ query: '(min-width: 450px)' });
  const isSgMaxScreen = useMediaQuery({ query: '(max-width: 425px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isLggScreen = useMediaQuery({ query: '(min-width: 1090px)' });
  const isXlScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const isXXlScreen = useMediaQuery({ query: '(min-width: 1440px)' });
  const isXXlsScreen = useMediaQuery({ query: '(min-width: 1460px)' });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return { isMdScreen: true, isLgScreen: true };
  }

  return {
    isSddScreen,
    isSdScreen,
    isSdgScreen,
    isSgScreen,
    isSggScreen,
    isSgMaxScreen,
    isMdScreen,
    isLgScreen,
    isLggScreen,
    isXlScreen,
    isXXlScreen,
    isXXlsScreen,
  };
};

