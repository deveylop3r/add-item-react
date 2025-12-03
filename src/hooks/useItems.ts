import { useState } from "react";
import type { Item, ItemId } from "../App";

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text: text,
      timestamp: Date.now(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  /*   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    // Estrategia 1: Acceder al valor del input mediante su name
    // NO lo recomiendo, porque es forzar y no funciona en el cliente
    //const newItemText = (elements.namedItem("item") as HTMLInputElement).value;

    //Estrategia 2, es asegurarse que es lo que es
    const inputElement = elements.namedItem("item");
    const isInput = inputElement instanceof HTMLInputElement;
    if (!isInput || inputElement == null) return;

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: inputElement.value,
      timestamp: Date.now(),
    };
    setItems((prevItems) => [...prevItems, newItem]);

    inputElement.value = "";
  }; */

  const handleDelete = (id: ItemId) => {
    return setItems((prevItems) =>
      prevItems.filter((currentItem) => currentItem.id !== id)
    );
  };

  return { items, addItem, handleDelete };
};
