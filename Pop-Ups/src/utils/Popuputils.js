// src/utils/popupUtils.js

export const showPopup = (setPopup, type, data = null) => {
    setPopup({ type, data });
  };
  
  export const closePopup = (setPopup) => {
    setPopup(null);
  };
  