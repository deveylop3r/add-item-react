import { describe, test, expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("<App />", () => {
  /* test("should work", () => {
    render(<App />);
    

    expect(screen.getByText("Prueba técnica de React")).toBeDefined();
  }); */

  test("should add an item to the list and remove them", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Buscar el input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    // Buscar el formulario
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    // Buscar el botón dentro del formulario
    const button = form.querySelector("button");
    expect(button).toBeDefined();

    // Simular que el usuario escribe en el input y hace click en el botón
    const randomText = crypto.randomUUID();
    await user.type(input, randomText);
    await user.click(button!);

    // Comprobar que el elemento se ha añadido a la lista
    const listItem = screen.getByRole("list");
    expect(listItem).toBeDefined();

    /*  screen.debug(); */
    expect(listItem.childNodes.length).toBe(1);

    // Eliminar el elemento de la lista
    const item = screen.getByText(randomText);
    const deleteButton = item.querySelector("button");
    expect(deleteButton).toBeDefined();

    await user.click(deleteButton!);

    const noResults = screen.getByText("No hay elementos en la lista");
    expect(noResults).toBeDefined();

    expect(screen.queryByRole("list")).toBeNull();

    /*     // Buscar el botón
    const addButton = screen.getByRole("button", { name: "Agregar" });
    expect(addButton).toBeDefined(); */
  });
});
