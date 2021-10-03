import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import Main from './layouts/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Switch>
        <Main>
          <Route exact path="/" component={null} />
          <Route path="/profil" component={null} />
          <Route path="/jadwal-perkuliahan" component={null} />
          <Route path="/absensi-perkuliahan" component={null} />
          <Route path="/daftar-nilai" component={null} />
          <Route path="/formulir" component={null} />
        </Main>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
