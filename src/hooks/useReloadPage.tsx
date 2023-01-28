import { useCallback } from 'react';

const useReloadPage = () => {
  const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);

  return reloadPage;
};

export default useReloadPage;