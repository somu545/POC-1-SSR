// src/App.jsx
import React, { useState } from 'react';
import FormPopup from './modals/FormPopup';
import TextPopup from './modals/TextPopup';
import ErrorPopup from './modals/ErrorPopup';
import { showPopup, closePopup } from './utils/Popuputils';

const App = () => {
  const [popup, setPopup] = useState(null);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    closePopup(setPopup);
  };

  const triggerError = () => showPopup(setPopup, 'error', 'This is an error message');

  const handleShowTextPopup = () => {
    if (formData) showPopup(setPopup, 'text', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">React Pop-Up Example</h1>

      <button onClick={() => showPopup(setPopup, 'form')} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-2">
        Open Form Pop-Up
      </button>

      <button onClick={triggerError} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mb-2">
        Show error
      </button>

      {formData && (
        <button onClick={handleShowTextPopup} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Show Submitted Data
        </button>
      )}

      {popup?.type === 'form' && <FormPopup onClose={() => closePopup(setPopup)} onSubmit={handleFormSubmit} />}
      {popup?.type === 'text' && <TextPopup popupData={popup.data} onClose={() => closePopup(setPopup)} />}
      {popup?.type === 'error' && <ErrorPopup errorMessage={popup.data} onClose={() => closePopup(setPopup)} />}
    </div>
  );
};

export default App;
