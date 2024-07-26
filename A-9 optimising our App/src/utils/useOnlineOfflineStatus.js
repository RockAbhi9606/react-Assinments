import { useEffect, useState } from "react";

const useOnlineOfflineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false)
    })
    window.addEventListener('online', () => {
      setOnlineStatus(true)
    })

    return () => {
      window.removeEventListener('offline', () => setOnlineStatus(false));
      window.removeEventListener('online', () => setOnlineStatus(true));
    };
  }, [])
  return onlineStatus;
}

export default useOnlineOfflineStatus;