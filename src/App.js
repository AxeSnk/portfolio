import React, { useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Overlay from './pages/Overlay/Overlay';
import Home from './pages/Home/Home';
import ReactFullpage from '@fullpage/react-fullpage';

const App = () => {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="App">
      {loading && <Loader />}
      {loading ? null : (
        <ReactFullpage
          //fullpage options
          licenseKey={'YOUR_KEY_HERE'}
          scrollingSpeed={1000}
          render={({ state, fullpageApi }) => {
            const onClickArrow = () => {
              fullpageApi.moveSectionDown()
            }

            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Overlay onClick={onClickArrow} />
                </div>
                <div className="section">
                  <Home />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      )}
    </div>
  );
};

export default App;
