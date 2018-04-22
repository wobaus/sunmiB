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
            <a href="#top" className="navbar-brand">sunmiB</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="https://www.linkedin.com/in/sunmibausmann" target="_black" ><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/wobaus"  target="_black" ><i class="fab fa-github-square"></i></a></li>
                <li><a href="mailto:info@sunmib.com"  target="_black"  ><i class="fas fa-envelope"></i></a></li>
            </ul>
            </div>
        </div>
        </nav>

    </header>

);

export default Header;
