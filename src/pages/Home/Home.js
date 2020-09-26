import React from 'react';
import './Home.css';
import './Home-media.css';
import Sample from '../../components/Sample/Sample';
import sample from '../../assets/img/sample.png';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__samples">
        <div className="Home__samples-item">
          <Sample
            title="Toxin"
            href={'https://axesnk.github.io/hostel-ui-kit/'}
            src={sample}
            alt={'sample-img-1'}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
