import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Home.css';
import './media.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Home = () => {
  return (
    <CSSTransition appear in timeout={500} classNames="tr">
      <div className="Home">
        <CSSTransition appear in timeout={1500} classNames="tr">
          <div className="name">Аксенов Александр</div>
        </CSSTransition>
        <CSSTransition appear in timeout={2500} classNames="tr">
          <div className="slogan">Amazing Web For You</div>
        </CSSTransition>
        <CSSTransition appear in timeout={4500} classNames="ta">
          <KeyboardArrowDownIcon fontSize='large' style={{padding: '20px'}} />
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Home;
