'use client';
import React from 'react';
import Spinner from "../Spinner";

function Counter() {
  const [count, setCount] = React.useState(() => {
    return null
  });

  React.useEffect(()=> {
    const savedValue = window.localStorage.getItem('saved-count');
    if (savedValue === null ) {
      setCount(0);
    }

    setCount(Number(savedValue));

  }, [])

  React.useEffect(() => {
    if (typeof count === 'number') {
      window.localStorage.setItem('saved-count', count);
    }
  }, [count]);

  return (
      <button
          className="count-btn"
          onClick={() => setCount(count + 1)}
      >
        Count: { count===null ? <Spinner/> : count}
      </button>
  );
}

export default Counter;
