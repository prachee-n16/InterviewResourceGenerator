// VENDOR Imports
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

// local imports
import Navbar from './components/Navbar';
import { Landing } from './screens/Landing/Landing';
// import { UrlInputForm } from './screens/UrlInputForm/UrlInputForm';
// import ResultsSummary from './screens/ResultsSummary/ResultsSummary';
import JobPostingWizard from './screens/wizard/JobPostingWizard.jsx';

// style imports
import theme from './assets/styles/theme';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            {/* <Route exact path="/input-description" element={<UrlInputForm />} /> */}
            {/* <Route
              exact
              path="/summarize-results"
              element={<ResultsSummary />}
            /> */}
            <Route exact path="/input-form" element={<JobPostingWizard />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
