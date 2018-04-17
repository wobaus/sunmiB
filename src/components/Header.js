import React from 'react';

const Header = () => (

    <header>

        <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
            </button>
            <a className="navbar-brand">Me</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="https://www.linkedin.com/in/sunmibausmann" target="_black" i className="fa fa-linkedin-square"></a></li>
                <li><a href="https://github.com/wobaus" i className="fa fa-github"></a></li>
                <li><a href="mailto:wobaus@gmail.com"  i className="fa fa-envelope"></a></li>
            </ul>
            </div>
        </div>
        </nav>

    </header>

);

export default Header;
