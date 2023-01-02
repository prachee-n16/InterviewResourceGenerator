import { Route, Routes } from "react-router-dom"
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme.js'

// Local File imports
import Landing from "./screens/Landing.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
          <Route path="/" exact element={<Landing />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
