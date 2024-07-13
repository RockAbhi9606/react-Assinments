import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import '../index.css'
import Header from './components/Header';
import CardContainer from './components/CardContainer';

const AppLayout = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="App">
      <Header />
      <CardContainer searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);




