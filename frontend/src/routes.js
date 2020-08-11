import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Pages
import Home from './pages/home'
import TaskAdd from './pages/TaskAdd'
//Components
import SideMenu from './components/SideMenu'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="area-painel">
                    <SideMenu />
                    <Route path="/" exact component={Home} />
                    <Route path="/taskadd" exact component={TaskAdd} />
                </div>
            </Switch>
        </BrowserRouter>
    )
}
