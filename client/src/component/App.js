import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

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

  function handleClearItems() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onClearItems={handleClearItems} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem}/>
      <Stats items={items} amount={amount}/>
    </div>
  )
}
