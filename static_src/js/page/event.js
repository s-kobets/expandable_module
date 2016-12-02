import Ajax from './ajax.js'

let Button = {

  init: function () {
    this.click();
  },

  myFunc: function (e) {
    e.preventDefault();
    // получить объект события и элемент-источник
    e = e || window.event;
    let src = e.target || e.srcElement;

    console.log(e, src);
  },

  myAjax: function (e) {
    e.preventDefault();
    // получить объект события и элемент-источник
    e = e || window.event;
    let src = e.target || e.srcElement;

    console.log(e, src);
  },

  click: function () {
    const button = document.getElementById('button');
    button.addEventListener('click', this.myFunc);
    const ajax = document.getElementById('ajax');
    button.addEventListener('click', this.myAjax);
  }
}

export default Button;
