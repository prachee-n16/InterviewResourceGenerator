import React, { createContext, useContext, useEffect, useState } from 'react';

const UrlContext = createContext();

export function UrlProvider({ children }) {
  const [url, setUrl] = useState('');
  const [checkURL, setCheckUrl] = useState(false);
  // States to make all inputs controlled
  const [jobPostDetails, setJobPostDetails] = useState({
    name: '',
    jobTitle: '',
    company: '',
    jobField: '',
    description: '',
  });

  useEffect(() => {
    console.log(jobPostDetails);
  }, [jobPostDetails, setJobPostDetails]);
  return (
    <UrlContext.Provider
      value={{
        url,
        setUrl,
        checkURL,
        setCheckUrl,
        jobPostDetails,
        setJobPostDetails,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
}

export function useUrl() {
  return useContext(UrlContext);
}
