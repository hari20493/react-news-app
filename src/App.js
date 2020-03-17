import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import News_component from './components/news_component/news_component'
import Nav_component from './components/nav_component/nav_component'

function App() {
  return (
    <div className="w-100">
        <Nav_component />
      <header className="App-header">
        <News_component />
      </header>
    </div>
  );
}

export default App;
