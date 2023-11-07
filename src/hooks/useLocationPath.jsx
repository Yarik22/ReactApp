import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useLocationPath() {
  const location = useLocation();
  const [path, setPath] = useState([location.pathname]);
  useEffect(() => {
    setPath((prev) => [...prev, location.pathname]);
  }, [location]);
  return [path];
}

export default useLocationPath;
