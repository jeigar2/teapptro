import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UploadText from './components/UploadText';
import SelectPlay from './components/SelectPlay';
import DialogueInterface from './components/DialogueInterface';
import Menu from './components/Menu';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <UploadText />
      <SelectPlay />
      <DialogueInterface />
      <Footer />
    </div>
  );
}

export default App;
