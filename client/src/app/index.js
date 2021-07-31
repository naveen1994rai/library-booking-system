import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components';
import { BooksList, BookInsert, BookUpdate, Cover } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Cover} />
                <Route path="/books/list" exact component={BooksList} />
                <Route path="/book/create" exact component={BookInsert} />
                <Route
                    path="/book/update/:id"
                    exact
                    component={BookUpdate}
                />
            </Switch>
        </Router>
    );
}

export default App;