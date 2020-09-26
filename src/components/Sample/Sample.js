import React from 'react';
import './Sample.css';

const Sample = (props) => {
  return (
    <React.Fragment>
      <h2 className="sample__title">{props.title}</h2>
      <a className="sample__link" href={props.href}>
        <img className="sample__image" src={props.src} alt={props.alt} />
      </a>
    </React.Fragment>
  );
};

export default Sample;
