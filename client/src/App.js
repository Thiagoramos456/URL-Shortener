import './App.css';
import 'whatwg-fetch';
import ShortenerForm from './components/ShortenerForm';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ShortenerResult from './components/ShortenerResult';

function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [url, setUrl] = useState('');
  console.log(url, shortenedUrl);

  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={
            <ShortenerForm
              url={ url }
              setUrl={setUrl}
              setShortenedUrl={setShortenedUrl}
              shortenedUrl={shortenedUrl}
            />
          }
        />
        <Route
          path='/result'
          element={<ShortenerResult shortenedUrl={ shortenedUrl } />}
        />
      </Routes>
    </main>
  );
}

export default App;
