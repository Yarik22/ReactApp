// AnimatedList.js
import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./animatedList.scss";
import useGlobalStore from "../../store/zustand";

const AnimatedList = () => {
  const goods = useGlobalStore((state) => state.goods);
  const [items, setItems] = useState(goods.map((v) => v));
  const [newItem, setNewItem] = useState({
    price: 50,
    currency: "USD",
    description: "New Item",
  });
  const [text, setText] = useState("");

  const handleAddItem = () => {
    if (text) {
      setItems([...items, newItem]);
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
    setNewItem((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  useEffect(() => {
    setItems(goods.map((v) => v));
  }, [goods]);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <TransitionGroup>
        {items.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div className="item" onClick={() => handleRemoveItem(index)}>
              <h3>{item.name}</h3>
              <p>Description: {item.description}</p>
              <p>
                Price: {item.price} {item.currency}
              </p>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default AnimatedList;
