import React from 'react';
import { BrowserRouter, Route, Switch , Link, NavLink} from 'react-router-dom';
import Header from '../components/Header'
import ExpensifyDashboardPage from '../components/Dashboard'
import CreateExpensePage from '../components/Create'
import EditExpensePage from '../components/Edit'
import HelpExpensePage from '../components/Help'
import NotFoundExpensePage from '../components/Notfound'

const AppRoutes =() =>  (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={ExpensifyDashboardPage} exact={true} />
            <Route path="/create" component={CreateExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
            <Route  component={NotFoundExpensePage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRoutes;