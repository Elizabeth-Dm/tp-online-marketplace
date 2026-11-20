import { Header } from "../components/Header/Header";
import { Button } from "../components/Button/Button";
import { products } from "../data/products";
import "./BasketPage.scss";

export function BasketPage(_props: { path?: string }) {
  const basketProducts = products;

  const total = basketProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const totalQuantity = basketProducts.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div class="basket-page">
      <Header />

      <main class="basket">
        <div class="basket__heading">
          <div>
            <h1 class="basket__title">Корзина</h1>
            <p class="basket__subtitle">
              Товары, которые вы выбрали
            </p>
          </div>

          <span class="basket__count">
            {totalQuantity} товара
          </span>
        </div>

        <div class="basket__content">
          <section class="basket__products">
            {basketProducts.map((product) => (
              <article class="basket-item" key={product.id}>
                <div class="basket-item__image">
                  <button
                    class="basket-item__favorite"
                    type="button"
                    aria-label="Избранное"
                  >
                    ♡
                  </button>
                </div>

                <div class="basket-item__info">
                  <h2 class="basket-item__name">
                    {product.name}
                  </h2>

                  <p class="basket-item__description">
                    {product.description}
                  </p>

                  <span class="basket-item__price">
                    {product.price}₽
                  </span>
                </div>

                <div class="basket-item__actions">
                  <span class="basket-item__quantity">
                    Количество: {product.quantity}
                  </span>

                  <button
                    class="basket-item__remove"
                    type="button"
                  >
                    Удалить
                  </button>
                </div>
              </article>
            ))}
          </section>

          <aside class="basket-summary">
            <h2 class="basket-summary__title">
              Ваш заказ
            </h2>

            <div class="basket-summary__row">
              <span>Количество товаров</span>
              <span>{totalQuantity} шт.</span>
            </div>

            <div class="basket-summary__row">
              <span>Стоимость товаров</span>
              <span>{total}₽</span>
            </div>

            <div class="basket-summary__divider" />

            <div class="basket-summary__total">
              <span>Итого</span>
              <span>{total}₽</span>
            </div>

            <Button
              type="button"
              variant="primary"
              class="basket-summary__button"
            >
              Оформить заказ
            </Button>

            <p class="basket-summary__note">
              Доставка рассчитывается отдельно
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}
