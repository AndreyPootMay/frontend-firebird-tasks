import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// Custom components
import { NavBar } from '../components/layout/NavBar';

import { Task } from '../components/tasks/Task';
import { TasksIndex } from '../components/tasks/TasksIndex';
import { TaskCreate } from '../components/tasks/TaskCreate';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />

                <Switch>
                    <Route exact path="/tasks" component={TasksIndex} />
                    <Route exact path="/add" component={TaskCreate} />
                    <Route path="/tasks/:id" component={Task} />

                    <Redirect to="/tasks" />
                </Switch>
        </Router>
    )
}
