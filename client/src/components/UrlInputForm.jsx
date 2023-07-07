import React, {useContext, useState} from 'react'

import { TextField } from '@mui/material';
import { UrlContext } from '../App';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UrlInputForm = () => {
  const { updateUrl } = useContext(UrlContext);
  const [url, setUrl] = useState('');
  const [openToast, setOpenToast] = useState(false);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast(false);
  };

  const validateUrl = (link) => {
    // Regular expression pattern to validate LinkedIn URL
    const regex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|jobs)\/.+$/i;
    return regex.test(link);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateUrl(url)){
      // Perform any necessary actions with the LinkedIn URL
      updateUrl(url);
    } else {
      setOpenToast(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField 
          sx={{
            width: '750px'
          }} 
          fullWidth 
          label="LinkedIn URL"
          placeholder="Enter your LinkedIn profile URL"
          value={url}
          onChange={handleInputChange}
          variant="outlined" 
          color='secondary'
          InputProps={{
            endAdornment: (
              <IconButton disableFocusRipple disableRipple>
                <SendRoundedIcon />
              </IconButton>
            ),
          }}
        />
        <Snackbar open={openToast} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Invalid LinkedIn URL. Please enter a valid URL.
          </Alert>
        </Snackbar>
      </form>
    </div>
  )
}

export default UrlInputForm