import { useEffect, useState } from "react";

export const FetchUser = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Leonid");

  useEffect(() => {
    if (count < 1000) {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }
    // console.log(1);
  }, [user, count]);

  return <div>{count}</div>;
};
