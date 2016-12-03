let Ajax = {
  init: function () {
	this.request();
  },

  request: function () {
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState !== 4) {
			return false;
		}
		if (xhr.status !== 200) {
			alert(`Error, status code: ${xhr.status}`);
			return false;
		}
		let newTag = document.createElement('div');
		newTag.innerHTML = JSON.stringify(xhr.responseText);
		document.body.appendChild(newTag);
	};

	xhr.open('GET', 'http://pokeapi.co/api/v2/', true);
	// параметры запроса
	xhr.send('');
  }
}

export default Ajax;