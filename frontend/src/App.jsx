import React from 'react';
import Form from './components/pages/Form';
import './App.css';
import Header from './components/Header';
import ContactList from './components/pages/ContactList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
// import {GlobalProvider} from "./context/GlobalContext/GlobalContext";


export default function App() {
  return (
    // <GlobalProvider>
      <BrowserRouter>
        <Header
          title={"Gratulujeme Občane, byl jste vybrán pro ochranu Imperia"}
          perex={"Načtěte svoje údaje"}
        />
        <Menu />
        <Routes>
          <Route exact path="/" element={<Form />}/>
          <Route exact path="/add-contact" element={<ContactList />}/>
        </Routes>
      </BrowserRouter>
    //{/* </GlobalProvider> */}

  );
}