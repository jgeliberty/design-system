import React, { useState } from 'react';

import './styles.scss';
import {GimliIcon} from '~atoms';

interface CounterInterface {
  value?: number;
  onClick: (value: number) => {}
};

const Counter = ({ value = 0, onClick       }: CounterInterface) => {
  const [currentNumber, setCurrentNumber] = useState(value);

  const updateNumber = (newValue: number) => {
    setCurrentNumber(newValue);
    onClick(newValue);
  }

  return (
    <div className='Counter'>
      <GimliIcon name='gl-i-remove' onClick={() => updateNumber(currentNumber - 1)}/>
      <div>{currentNumber}</div>
      <GimliIcon name='gl-i-add' onClick={() => updateNumber(currentNumber + 1)}/>
    </div>
  );
};

export default Counter;
