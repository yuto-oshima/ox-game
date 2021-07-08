import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './components/themes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TopPage } from './components/pages/top-page';
import { CPUBattlePage } from './components/pages/cpu-battle-page';
import { NotFoundPage } from './components/pages/not-found-page';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TopPage}/>
          <Route path="/cpu-battle" component={CPUBattlePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
