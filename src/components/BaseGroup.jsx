import React, { useState } from 'react';
import styled from 'styled-components';

import { b_, aaFromCodon } from './AAData';

const BaseSelector = styled.div`
  background-color: gray;
  cursor: pointer;
  display: block;
  height: 2rem;
  transition: background-color ease-in-out 0.2s;
  width: 2rem;
  &:hover {
    background-color: lightgray;
  }
  &.active {
    background-color: purple;
  }
`;

export const BaseGroup = ({ onChange, value }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div>
      {Object.values(b_).map((b) => (
        <BaseSelector key={b.letter} onClick={() => handleClick(b.letter)} className={selected === b.letter ? 'active' : ''}>
          {b.letter}
        </BaseSelector>
      ))}
      <input type="hidden" value={value != null ? selected : ''} />
    </div>
  );
};

export const BaseGroupFull = () => {
  const [b1, setB1] = useState(null);
  const [b2, setB2] = useState(null);
  const [b3, setB3] = useState(null);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'horizontal', gap: '0.25rem' }}>
        <BaseGroup onChange={setB1} value={b1} />
        <BaseGroup onChange={setB2} value={b2} />
        <BaseGroup onChange={setB3} value={b3} />
      </div>
      <div>{b1 != null && b2 != null && b3 != null ? `${aaFromCodon(b1, b2, b3).name} (${aaFromCodon(b1, b2, b3).abbr})` : 'No amino acid'}</div>
    </div>
  );
};
