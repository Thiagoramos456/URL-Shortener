import React from 'react';
import { Link } from 'react-router-dom';

function ShortenerResult({ shortenedUrl }) {
  return (
    <div className='flex flex-col items-center bg-white shadow shadow-gray-300 my-10 w-11/12 mx-auto justify-center'>
      <h1 className='text-5xl text-center mt-8'>Your shorter URL is</h1>
      <span className='mt-6 text-2xl'>{`${shortenedUrl}`}</span>

      <Link to="/">
        <button className='bg-blue-500 border-0 my-8 px-8 text-white mt-8 rounded-full py-2'>
          Shorten another URL
        </button>
      </Link>
    </div>
  );
}

export default ShortenerResult;
