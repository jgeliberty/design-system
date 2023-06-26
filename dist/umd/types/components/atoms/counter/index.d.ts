import React from 'react';
import './styles.scss';
interface CounterInterface {
    value?: number;
}
declare const Counter: ({ value }: CounterInterface) => React.JSX.Element;
export default Counter;
