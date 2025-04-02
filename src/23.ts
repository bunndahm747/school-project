// Import necessary packages
import { useState } from "react";

// Function to display the current time
function currentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

// Display the current time on the screen
function App() {
  const [time, setTime] = useState(currentTime);

  // Update the display with the current time
  useEffect(() => {
    let updatedTime = currentTime();
    if (updatedTime === time) return; // If it's already displayed, don't update again

    setTime(updatedTime); // Otherwise, update the state
  }, [time]);

  return (
    <div>
      <h1>Current Time: {time}</h1>
    </div>
  );
}

export default App;
