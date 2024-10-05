// Spinner.js (optional)
import React from 'react';
import '../../scss/loader.scss';

const Spinner = ({ isLoading }) => {

  let loading = isLoading.reduce((acc, el) => {
    if (el) {
      return true
    }
    return acc
  }, false)

  return (
    <>
      {
        loading && <div className="loader-overlay">
          <div className="spinner"></div>
        </div>
      }
    </>

  );; // You can replace this with a proper spinner component
};

export default Spinner;
