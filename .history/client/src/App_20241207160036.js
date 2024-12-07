import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passport", quantity: 2, packed: false },
  { id: 2, description: "Bags", quantity: 3, packed: false },
]

export default function App() {
  const [items, setItems] = useState([]);
  const amount = items.length;


  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items)=> items.filter((item)=>item.id !== id));
  }
  
  function handleToggleItem(id) {
    setItems((items)=> items.map((item) => item.id===id ? {...item, packed: !item.packed}: item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem}/>
      <Stats items={items} amount={amount}/>
    </div>
  )
}

function Logo() {
  return <h1> 🏖️ Far Away 💻 </h1>
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault(); // no reload for this page, 不会刷新
    if (!description) return;
    
    const newItem = {description, quantity, packed: false, id: Date.now()};

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trips?</h3>
      <select
        value={quantity}
        onChange={(e) =>
         setQuantity(Number(e.target.value))
        }>
        {Array.from({length: 20}, (_, i) => i + 1).map
        ((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => 
          setDescription(e.target.value)
        } />
      <button>Add</button>
    </form>
  )
}

function PackingList({ items, onDeleteItem,onToggleItems }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems}/>
        ))}
      </ul>
    </div>
  )
}

function Item({ item, onDeleteItem,onToggleItems }) {
  return (
    <li>
      <input type='checkbox' value={item.packed} onChange={() => onToggleItems(item.id)}/>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function Stats({ items, amount }) {
  const packedAmount = items.filter((item)=>item.packed).length;
  const percent = Math.round((packedAmount / amount) * 100);

  if (amount = )
  return (
    <footer className="stats">
      <em>
        {percent === 100 
        ? "You got everything! Ready to go ✈️"
        : `You have ${amount} items on your list, and you already packed ${packedAmount} 
        (${percent}%)`}
      </em>
    </footer>
  )
}
