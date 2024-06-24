import React from 'react';
import Form from './components/Form';
import './App.css';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <Header
        title={"Gratulujeme Občane, byl jste vybrán pro ochranu Imperia"}
        perex={"Načtěte svoje údaje"}
      />
        <Form />
    </div>
  );
}