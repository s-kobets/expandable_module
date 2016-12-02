let cloneDom = {};

cloneDom.init = function () {
	const oldnode = document.getElementById('result');
	let clone = oldnode.cloneNode(true);
	// выполнить операции над копией...
	let p = document.createElement('p');
	p.innerHTML = 'end';
	clone.appendChild(p);

	// когда копия будет готова:
	oldnode.parentNode.replaceChild(clone, oldnode);
};

export default cloneDom;