import { useState } from "preact/hooks";
import { Header } from "../components/Header/Header";
import { Button } from "../components/Button/Button";
import { Rating } from "../components/Rating/Rating";
import { productCard } from "../data/productCard";
import "./ProductPage.scss";

const formatPrice = (price: number) => `${price.toLocaleString("ru-RU")} ₽`;

export function ProductPage() {
  const { name, price, images, reviews } = productCard;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div class="product-page">
      <Header />

      <main class="product">
        {/* Левая колонка: галерея + название и цена */}
        <div class="product__main">
          <section class="gallery">
            <div class="gallery__main">
              {images[current] && (
                <img class="gallery__img" src={images[current]} alt={name} />
              )}

              <button
                class="gallery__arrow gallery__arrow--prev"
                type="button"
                aria-label="Предыдущее фото"
                onClick={prev}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                class="gallery__arrow gallery__arrow--next"
                type="button"
                aria-label="Следующее фото"
                onClick={next}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <div class="gallery__thumbs">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  class={`gallery__thumb ${i === current ? "is-active" : ""}`}
                  aria-label={`Фото ${i + 1}`}
                  onClick={() => setCurrent(i)}
                >
                  {src && <img src={src} alt="" />}
                </button>
              ))}
            </div>
          </section>

          <div class="product__title-row">
            <h1 class="product__name">{name}</h1>
            <span class="product__price">{formatPrice(price)}</span>
          </div>
        </div>

        {/* Центральная колонка: отзывы */}
        <section class="reviews">
          <h2 class="reviews__title">Отзывы</h2>

          <div class="reviews__list">
            {reviews.map((review) => (
              <article class="review" key={review.id}>
                <div class="review__head">
                  <div class="review__avatar" />
                  <span class="review__name">{review.author}</span>
                  <Rating value={review.rating} />
                </div>
                <p class="review__text">{review.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Правая колонка: кнопки, прижаты к низу */}
        <aside class="product__actions">
          <Button
            type="button"
            variant="secondary"
            class="product__auction"
          >
            Начать аукцион
          </Button>
          <Button type="button" variant="primary">
            Купить
          </Button>
          <span class="product__buy-price">{formatPrice(price)}</span>
        </aside>
      </main>
    </div>
  );
}