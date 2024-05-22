import { useEffect, useState } from 'react';

const Counter = ({ animationStart, percentage }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count == percentage) {
        clearInterval(interval);
      } else {
        setCount(count + 1);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [count]);

  return <>{count}%</>;
};

export default Counter;
