import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Redirect to another site after the component mounts
    window.location.href = 'https://bishwobista.com.np';
  }, []);

  return <div>Redirecting...</div>;
};

export default App;
