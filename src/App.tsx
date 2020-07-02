import React, { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import { IUserInput } from './Common/Interfaces';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

// const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 700,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// })

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    BaseCurrency: "NZD",
  });

  const SetUserInput = (a: IUserInput) => setUserInput(a)

  return (
    <div className="App">
      {/* <MuiThemeProvider theme={theme}> */}
        <Calculator SetUserInput={SetUserInput} />
      {/* </MuiThemeProvider> */}
    </div>
  );
}

export default App;