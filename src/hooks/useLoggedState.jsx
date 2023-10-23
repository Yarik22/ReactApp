import { useEffect, useState } from "react";

function useLoggedState() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return [value, setValue];
}

export default useLoggedState;
