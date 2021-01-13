import React, { useState } from 'react';
import './ResultCard.scss';

export const ResultCard = ({ result: { name, description, language } })=> {
  const [isOpen, setOpenValue] = useState(false);

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>
        Language: <span>{language}</span>
      </p>
      <p
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
