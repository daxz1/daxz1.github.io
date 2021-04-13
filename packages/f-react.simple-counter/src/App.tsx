import React, { useState } from 'react';

const App:React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(prevState => prevState + 1);
  return (
    <>
      <button onClick={increment}>Click Me</button>
      <div>Count {count}</div>
    </>
  );
};

export default App;
