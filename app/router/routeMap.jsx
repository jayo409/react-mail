import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../App.jsx'
import Home from '../Home/Home.jsx'
import About from '../About/index.jsx'
import Buy from '../Buy/index.jsx'
import Questions from '../Questions/index.jsx'
import Contact from '../Contact/index.jsx'

class RouteMap extends React.Component {

    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/buy' component={Buy} />
                    <Route path='/questions' component={Questions} />
                    <Route path='/contact' component={Contact} />
                </Route>
            </Router>
        )
    }
}

export default RouteMap