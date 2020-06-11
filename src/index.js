import api from './api';
import $ from 'jquery';
import store from './store';
import 'normalize.css';
import shoppingList from './shopping-list';
import './index.css';

const main = function () {
  api.getItems()
    //.then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
