import type { ItemId } from "../App";

type Props = {
  id: ItemId;
  text: string;
  handleDelete: (id: ItemId) => void;
};

export default function Item({ id, text, handleDelete }: Props) {
  return (
    <li>
      {text}
      <button onClick={() => handleDelete(id)}>Borrar</button>
    </li>
  );
}
