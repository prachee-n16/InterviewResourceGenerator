import React, {useContext, useState, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { UrlContext } from '../App';

const DataViewer = () => {
  const { url } = useContext(UrlContext);
  const [urlData, setUrlData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/find-job-posting', {
        method: 'POST', // Replace with the desired HTTP method (e.g., POST, PUT)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      const jsonData = await response.json();
      setUrlData(jsonData);
      console.log(urlData)
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Runs when app mounts
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div>
      {urlData == null
        ? <CircularProgress color="secondary" /> : <div/>
      }
    </div>
    
  )
}

export default DataViewer