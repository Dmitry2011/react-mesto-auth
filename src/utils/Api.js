class Api {
  constructor(config) {
    this._url = config.Url;
    this._token = config.headers.authorization;
  }

    // Метод проверки ответ от сервера
  _handleResponse(res) {
    {if (res.ok) {
      return res.json();
    }
    return Promise.reject('Что то пошло не так.')
    }
  }

    // Метод получения карточки с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse)
  }

    // Метод получения данных о пользователе с сервера
  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse)
  }

    // Метод обновления данных пользователя на сервере
  updateUserData(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(this._handleResponse)
  }

    // Метод обновления аватар на сервере
  updateAvatar(newUrl) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: newUrl
      })
    })
    .then(this._handleResponse)
  }

    // Метод добавления новой карточки на сервер
  addNewCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(this._handleResponse)
  }

    // Метод удаления карточки с сервера
  deleteCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse)
  }

    // Метод добавления "лайк"
  addLike(_id) {
    return fetch(`${this._url}/cards/likes/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
  }

    // Метод удаления "лайк"
  deleteLike(_id) {
    return fetch(`${this._url}/cards/likes/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse)
  }
}


const api = new Api({
  Url: "https://mesto.nomoreparties.co/v1/cohort-42",
  headers: {
    authorization: "4ba7d259-729a-410a-84af-52740cfb006a",
    "Content-Type": "application/json",
  },
});

export default api;
