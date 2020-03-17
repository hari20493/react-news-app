import React, {Component} from 'react';
import './nav_component.css'

class Nav_component extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <div className="w-100">
                    <h2 className="text-uppercase text-center">
                        News Headlines
                    </h2>
                </div>
            </nav>
        )
    }
}

export default Nav_component;
