import { useEffect,useState } from "react";

function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    // return () => window.removeEventListener("online", onOnline);
  }, []);

  return onlineStatus;
}

export default useOnlineStatus;
