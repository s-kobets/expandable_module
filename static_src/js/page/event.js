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

  click: function () {
    const button = document.getElementById('button');
    button.addEventListener('click', this.myFunc);
  }
}

export default Button;
