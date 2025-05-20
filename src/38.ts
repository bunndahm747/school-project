import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Your component logic here
  }, []);

  return (
    <div>
      This is my component with an empty effect.
    </div>
  );
}

export default MyComponent;
