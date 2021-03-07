import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import ItemsList from "./ItemsList";
import { ItemProvider } from "./ItemContext";
import AddItem from './AddItem';

function App() {
  return (
    <ItemProvider>
      <div className="App">
      <div className="content">
        <Navbar />
      </div>
        <AddItem />
        <AddItem />
        <ItemsList />
      </div>
    </ItemProvider>
  );
}

export default App;
