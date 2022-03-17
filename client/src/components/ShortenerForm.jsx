import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function ShortenerForm({ url, setUrl, setShortenedUrl }) {
  const navigate = useNavigate();
  const handleInputUrl = ({ target }) => {
    setUrl(target.value);
  };

  useEffect(() => setUrl(''), [setUrl]);

  const submitUrl = async (e) => {
    e.preventDefault();
    const response = await window.fetch('http://localhost:3001/url', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    const parsedResponse = await response.json();
    setShortenedUrl(parsedResponse.newUrl);
    navigate('/result');
  };

  return (
    <div>
      <form
        onSubmit={submitUrl}
        className='flex flex-col items-center bg-white shadow shadow-gray-300 my-10 w-11/12 mx-auto justify-center'
      >
        <h1 className='text-5xl text-center mt-8'>
          Paste here the URL to short
        </h1>
        <div className='w-8/12 my-10 flex flex-col items-center'>
          <input
            className='py-1 px-3 w-full border-2  outline-none border-gray text-center'
            placeholder='Paste URL to short'
            onChange={handleInputUrl}
            value={url}
          />
          <button className='bg-blue-500 border-0 px-8 text-white mt-8 rounded-full py-2'>
            Shorten URL
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShortenerForm;
