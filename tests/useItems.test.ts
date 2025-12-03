import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe("useItems hook", () => {
  test("should add and remove items", () => {
    const { result } = renderHook(() => useItems());

    console.log(result.current);
    expect(result.current.items).toEqual([]);
    expect(result.current.items.length).toBe(0);

    act(() => {
      result.current.addItem("Mi primer item");
      result.current.addItem("Ir a correr");
    });

    console.log(result.current.items);
    expect(result.current.items.length).toBe(2);

    act(() => {
      result.current.handleDelete(result.current.items[0].id);
    });
    expect(result.current.items.length).toBe(1);
    /*  expect(result.current.items[0].text).toBe("Mi primer item"); */
  });
});
