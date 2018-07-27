class DOMNodeCollection {
  constructor(HTMLArr) {
    this.HTMLArr = HTMLArr;
  }

  html (string = "") {
    if (string === "") {
      return this.HTMLArr[0].innerHTML;
    } else {
      this.HTMLArr.forEach((el) => {
        el.innerHTML = string;
      });
    }
    return this.HTMLArr;
  }

  empty () {
    this.HTMLArr.forEach((el) => {
      el.innerHTML = "";
    });
  }

  append (element) {
    let appending = "";
    if (element instanceof Object && !(element instanceof DOMNodeCollection)) {
      element = $l(element);
    }

    switch (typeof element) {
      case "object":
      this.HTMLArr.forEach((parent) => {
        element.HTMLArr.forEach((child) => {
          parent.innerHTML += child.outerHTML;
        });
      });
      return undefined;
      case "string":
      appending += element;
      break;
    }

    this.HTMLArr.forEach((el) => {
      el.innerHTML += appending;
    });

  }

  children () {
    let childs = [];
    // debugger
    this.HTMLArr.forEach((el) => {
      // debugger
      childs = childs.concat(Array.from(el.children));
    });
    return new DOMNodeCollection(childs);
  }

  parent() {
    let parents = [];
    this.HTMLArr.forEach((el) => {
      parents = parents.concat((el.parentElement));
    });
    return new DOMNodeCollection(parents);
  }
}

module.exports = DOMNodeCollection;
