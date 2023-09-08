import React, { createContext, useContext, useState } from 'react';

const UrlContext = createContext();

export function UrlProvider({ children }) {
  const [url, setUrl] = useState('');
  const [checkURL, setCheckUrl] = useState(false);

  return (
    <UrlContext.Provider value={{ url, setUrl, checkURL, setCheckUrl }}>
      {children}
    </UrlContext.Provider>
  );
}

export function useUrl() {
  return useContext(UrlContext);
}
