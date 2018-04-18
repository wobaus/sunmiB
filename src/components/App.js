import React, { Component } from 'react';

//Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Resume />
        <About />
        <Footer />

      </div>
    );
  }
}

export default App;
