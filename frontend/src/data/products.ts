export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Фигурки итальянские мемы",
    description: "Коллекционная фигурка",
    price: 123,
    quantity: 1,
    image: "",
  },
  {
    id: 2,
    name: "Фигурка Бомбардиро Крокодило",
    description: "Коллекционная фигурка",
    price: 250,
    quantity: 1,
    image: "",
  },
  {
    id: 3,
    name: "Фигурка Тралалело Тралала",
    description: "Коллекционная фигурка",
    price: 180,
    quantity: 2,
    image: "",
  },
];
