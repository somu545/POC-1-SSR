// src/components/FormPopup.jsx
import React, { useState } from 'react';

const FormPopup = ({onClose, onSubmit}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () =>{
    if(!name || !email){
      alert('All fields are required');
      return;
    }
    onSubmit({name,email});
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Form Pop-Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
