import React from 'react';
import './styles.scss';
interface CounterInterface {
    value?: number;
    onClick?: (value: number) => void;
}
declare const Counter: ({ value, onClick }: CounterInterface) => React.JSX.Element;
export default Counter;
