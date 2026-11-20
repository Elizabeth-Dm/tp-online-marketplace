import { type FormEvent, useState } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import "./LoginPage.scss";
import heroImage from "../assets/images/login.png";

type Mode = "register" | "login";

export const LoginPage = () => {
  const [mode, setMode] = useState<Mode>("register");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const isRegister = mode === "register";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ mode, login, password, repeatPassword, remember });
  };

  return (
    <main className="login-page">
      <div className="login-page__inner">
        <section className="login-page__form-wrap">
          <form className="login-card" onSubmit={handleSubmit}>
            <div className="login-card__tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={isRegister}
                className={`login-card__tab ${isRegister ? "is-active" : ""}`}
                onClick={() => setMode("register")}
              >
                Регистрация
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={!isRegister}
                className={`login-card__tab ${!isRegister ? "is-active" : ""}`}
                onClick={() => setMode("login")}
              >
                Авторизация
              </button>
            </div>

            <div className="login-card__fields">
              {/* Используем наш компонент Input */}
              <Input
                type="text"
                placeholder="Логин"
                autoComplete="username"
                value={login}
                onChange={(e) => setLogin(e.currentTarget.value)}
              />
              <Input
                type="password"
                placeholder="Пароль"
                autoComplete={isRegister ? "new-password" : "current-password"}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              {isRegister && (
                <Input
                  type="password"
                  placeholder="Повторите пароль"
                  autoComplete="new-password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.currentTarget.value)}
                />
              )}
            </div>

            <label className="login-card__remember">
              <input
                className="login-card__checkbox"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.currentTarget.checked)}
              />
              <span>Запомни меня</span>
            </label>

            {/* Используем наш компонент Button и оборачиваем для центрирования */}
            <div className="login-card__actions">
              <Button variant="primary" type="submit">
                Войти
              </Button>
            </div>
          </form>
        </section>

        <div className="login-page__divider" aria-hidden="true" />

        <section className="login-page__hero">
          <img
            className="login-page__hero-img"
            src={heroImage}
            alt="Интернет-магазин"
          />
        </section>
      </div>
    </main>
  );
};