import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./Header.scss";

export function Header() {
  return (
    <header class="header">
      <div class="header__container">
        {/* Левая часть */}
        <div class="header__left">
          <a href="/" class="header__logo">
            <div class="header__logo-icon"></div>
            <span>Название</span>
          </a>
          <Button variant="primary">Каталог</Button>
        </div>

        {/* Поиск */}
        <div class="header__search">
          <svg
            class="header__search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <Input class="header__search-input" type="text" placeholder="Поиск" />
        </div>

        {/* Правая часть */}
        <div class="header__right">
          <button
            class="header__icon-btn"
            aria-label="Корзина"
            onClick={() => (window.location.href = "/basket")}
            >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 11-1 9" />
              <path d="m19 11-4-7" />
              <path d="M2 11h20" />
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
              <path d="m5 11 4-7" />
              <path d="m9 11 1 9" />
            </svg>
          </button>

          <button class="header__icon-btn" aria-label="Избранное">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>

          {/* Ссылка с теми же стилями, что и у Button */}
          <a href="/login" class="btn btn--primary" onClick={() => (window.location.href = "/login")}>
            Пользователь
          </a>
        </div>
      </div>
    </header>
  );
}