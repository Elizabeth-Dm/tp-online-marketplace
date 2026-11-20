export interface Review {
  id: number;
  author: string;
  rating: number; // от 1 до 5
  text: string;
}

export interface ProductCardData {
  id: number;
  name: string;
  price: number;
  images: string[];
  reviews: Review[];
}

export const productCard: ProductCardData = {
  id: 1,
  name: 'Фигурка сувенирная "Краб"',
  price: 4293,
  // пустые строки = серые плейсхолдеры, пока нет картинок
  images: ["", "", ""],
  reviews: [
    {
      id: 1,
      author: "Руслан Б.",
      rating: 5,
      text: "Прекрасная фигурка. Поставил рядом с компьютером и пишу код на Rust",
    },
    {
      id: 2,
      author: "Евгений Ж.",
      rating: 1,
      text: "Хотел поставить вместе со статуэткой удава, так эта ***** своими клешнями столкнула её........",
    },
  ],
};