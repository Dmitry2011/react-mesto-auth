import React from "react";
import logo from '../images/mesto.svg';
import { Route } from "react-router";
import { Link } from "react-router-dom";

function Header({ email, signOut }) {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo"/>
      <Route exact path="/">
        <div className="header__info-auth">
          <p className="header__email">{email}</p>
          <button className="header__auth" type="button" onClick={signOut}>
            Выйти
          </button>
        </div>
      </Route>
      <Route exact path="/sign-in">
        <Link className="header__auth" to="sign-up">
          Регистрация
        </Link>
      </Route>
      <Route exact path="/sign-up">
        <Link className="header__auth" to="sign-in">
          Войти
        </Link>
      </Route>
    </header>
  );
}

export default Header;
