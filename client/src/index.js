import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import CollectionStore from "./store/CollectionStore";
import ItemStore from "./store/ItemStore";

export const Context =  createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Context.Provider value={{
      user: new UserStore(),
      collection: new CollectionStore(),
      item: new ItemStore()
  }}>
      <App />
  </Context.Provider>
  </React.StrictMode>
);

