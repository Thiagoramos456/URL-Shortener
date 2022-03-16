import React, { useEffect, useState } from 'react';

function ShortenerForm() {
  const [url, setUrl] = useState('');

  const handleInputUrl = ({ target }) => {
    setUrl(target.value);
  };

  const submitUrl = async (e) => {
    e.preventDefault();
    const shortenedUrl = await fetch('http://localhost:3001/url', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    const parsedResult = await shortenedUrl.json();
  };

  return (
    <div>
      <form onSubmit={submitUrl} className='flex flex-col items-center'>
        <input
          className='rounded-full border-2 px-3 my-4 border-gray-500 text-center'
          placeholder='Paste URL to short'
          onChange={handleInputUrl}
        />
        <button className='rounded-full bg-green-500 px-4 py-2 text-white'>
          Short URL
        </button>
      </form>
    </div>
  );
}

export default ShortenerForm;
