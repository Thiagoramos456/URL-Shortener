import React from 'react';

function ShortenerForm() {
  return (
    <form className="flex flex-col items-center">
      <input
        className='rounded-full border-2 px-3 my-4 border-gray-500 text-center'
        placeholder='Paste URL to short'
      />
			<button className="rounded-full bg-green-500 px-4 py-2 text-white">Short URL</button>
    </form>
  );
}

export default ShortenerForm;
