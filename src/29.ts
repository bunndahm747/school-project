import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

function MyComponent({ children }: Props) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {children}
      <button onClick={handleIncrease}>增加计数</button>
    </div>
  );
}

export default MyComponent;
