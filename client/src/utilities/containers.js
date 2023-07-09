import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const UrlInputFormContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '95vh',
    width: '100vw',
    display: 'flex',
    color: theme.palette.primary.contrastText,
    padding: '2rem',
  }));

export const DataViewerContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '95vh',
    width: '100vw',
    display: 'flex',
    color: theme.palette.primary.contrastText,
    padding: '2rem',
  }));
  