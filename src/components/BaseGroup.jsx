import React, { useState } from 'react';
import styled from 'styled-components';

const Base = styled.div`
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

const Bases = [
  { letter: 'A', name: 'Adenine' },
  { letter: 'C', name: 'Cytosine' },
  { letter: 'G', name: 'Guanine' },
  { letter: 'U', name: 'Uracil' },
];

export const BaseGroup = ({ onChange, value }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div>
      {Bases.map((base, index) => (
        <Base key={index} className={selected === index ? 'active' : ''} onClick={() => handleClick(index)}>
          {base.letter}
        </Base>
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
      <div>{b1 != null && b2 != null && b3 != null ? `${Bases[b1].letter} ${Bases[b2].letter} ${Bases[b3].letter}` : ''}</div>
    </div>
  );
};
