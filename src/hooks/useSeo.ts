import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
};

export default function useSeo({ title, description }: Props) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
}
