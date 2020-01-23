window.onload = function () {
	const color_btn_els = document.querySelectorAll('.colors .color');
	const capacity_btn_els = document.querySelectorAll('.capacity .size');
	const imagery_el = document.querySelector('.imagery');
	const image_el = document.querySelector('.imagery .image');

	for (let i = 0; i < capacity_btn_els.length; i++) {
		let btn = capacity_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.capacity .size.selected').classList.remove('selected');
			this.classList.add('selected');
		});
	}

	for (let i = 0; i < color_btn_els.length; i++) {
		let btn = color_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.colors .color.selected').classList.remove('selected');
			this.classList.add('selected');
			image_el.src = "images/xr-" + this.dataset.name + '.png';
			imagery_el.style.backgroundColor = this.dataset.color;
		});
	}
}