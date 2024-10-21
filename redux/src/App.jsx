import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Redux Counter Example</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
