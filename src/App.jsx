import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("")

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value ={newItem} onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="Header">Todo List</h1>
      <ul className="List">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn-delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn-delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 3
          </label>
          <button className="btn-delete">Delete</button>
        </li>
      </ul>
    </>
  );
}
