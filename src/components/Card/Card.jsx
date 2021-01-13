import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export const Card = ({ result })=> {
  const [isOpen, setOpenValue] = useState(false);
  const { name, description, language } = result;

  return (
    <div className="card">
      <h3 className="card__heading">{name}</h3>
      <p className="card__lang">
        Language: <span>{language}</span>
      </p>
      <p
        className="card__desc"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: isOpen ? "normal" : "nowrap",
        }}
        onClick={() => setOpenValue(!isOpen)}
      >
        Description: <span>{description}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired
};