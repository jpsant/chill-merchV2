import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PromotionalPage from '../containers/PromotionalPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PromotionalPage} />
      </Switch>
    </BrowserRouter>
  )
}