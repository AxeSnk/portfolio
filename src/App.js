import React, { useEffect } from 'react';
import Loader from './components/Loader';
import Home from './pages/Home';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="App">
      {loading && <Loader />}
      {loading ? null : <Home />}
    </div>
  );
};

export default App;
