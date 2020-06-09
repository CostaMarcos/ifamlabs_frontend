import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main';
import Times from './pages/horarios';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/horarios/:id" component={Times}/>
            </Switch>
        </BrowserRouter>
    );
} 