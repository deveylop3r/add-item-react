import { useState } from "react";
import "./App.css";

type ItemId = `${string}-${string}-${string}-${string}-${string}`;
interface Item {
  id: ItemId;
  timestamp: number;
  text: string;
}

/* const INITIAL_ITEMS = [
  { id: crypto.randomUUID(), timestamp: Date.now(), text: "Videojuegos" },
  { id: crypto.randomUUID(), timestamp: Date.now(), text: "Libros" },
  { id: crypto.randomUUID(), timestamp: Date.now(), text: "Muebles" },
  { id: crypto.randomUUID(), timestamp: Date.now(), text: "Ropa" },
]; */
function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
  };

  const handleDelete = (id: ItemId) => {
    return setItems((prevItems) =>
      prevItems.filter((currentItem) => currentItem.id !== id)
    );
  };

  return (
    <>
      <main>
        <aside>
          <h1>Prueba técnica de React</h1>
          <h2>Anadir y eliminar elementos de una lista </h2>
          <form
            onSubmit={handleSubmit}
            aria-label="Anadir elementos a la lista"
            role="form"
          >
            <label>
              Elemento a introducir:
              <input
                type="text"
                name="item"
                required
                placeholder="Videojuegos"
              />
            </label>
            <button>Anadir elementos</button>
          </form>
        </aside>

        <section>
          <h2>Lista de elementos</h2>

          {items.length === 0 ? (
            <p>
              <strong>No hay elementos en la lista</strong>
            </p>
          ) : (
            <ul>
              {items.map((item) => {
                return (
                  <li key={item.id}>
                    {item.text}
                    <button onClick={() => handleDelete(item.id)}>
                      Borrar
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}

export default App;

/*     const getControl = control => {
      const isControl = control instanceof HTMLInputElement;
      if (!isControl || control == null) return null;
      return control;
    } */

/* if (inputElement && inputElement instanceof HTMLInputElement) // JS Puero
      {
      const newItemText = inputElement.value;

      const newItem: Item = {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: newItemText,
      }; */

/*     const form = event.currentTarget;
    const formData = new FormData(form);
    const newItemText = formData.get("item") as string; */
