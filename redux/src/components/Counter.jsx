

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Count: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
