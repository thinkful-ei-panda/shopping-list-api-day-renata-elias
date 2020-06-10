const BASE_URL = 'https://thinkful-list-api.herokuapp.com/elias';
/*
* @param {string} URL
* @param {object} options
* @returns {Promise} 
*/

const listApiFetch = function (...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        error = {code: res.status};
      
        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    });
};

const getItems = function () {
  return listApiFetch(`${BASE_URL}/items`);
};

const createItem = function(newName) {
  const newItem = JSON.stringify({newName});
  return listApiFetch(`${BASE_URL}/items`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: newItem
  });
};

const updateItem = function (id,updateData) {
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: updateData
  });
};

const deleteItem = function (id) {
  return listApiFetch(`${BASE_URL}/items/${id}`,{
    method: 'DELETE'
  });
};


export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};