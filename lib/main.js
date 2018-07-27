const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = (selector) => {
  let HTMLArr = [];

  if (selector instanceof HTMLElement) {
    HTMLArr.push(selector);
  } else {
    let $query = document.querySelectorAll(selector);
    let queryArr = Array.from($query);
    HTMLArr = HTMLArr.concat(queryArr);
  }

  let nodeCollection = new DOMNodeCollection(HTMLArr);
  return nodeCollection;
};
