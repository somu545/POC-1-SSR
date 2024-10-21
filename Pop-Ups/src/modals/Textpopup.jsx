// src/components/TextPopup.jsx
import React from 'react';

const TextPopup = ({ popupData, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-lg font-bold mb-4">Data Submitted</h2>
      <p className="text-gray-600">Name: {popupData?.name}</p>
      <p className="text-gray-600">Email: {popupData?.email}</p>
      <div className="flex justify-end">
        <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  </div>
);

export default TextPopup;
