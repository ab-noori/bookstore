import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button type="button" onClick={() => dispatch(decrement())}>-</button>
        <button type="button" onClick={() => dispatch(increment())}>+</button>
      </div>
    </section>
  );
};

export default Counter;
