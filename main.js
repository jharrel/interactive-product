window.onLoad = () {
    const capacity_btn_els = document.querySelectorAll('.capacity .size');

    for (let i = 0; i < capacity_btn_els; i++) {
        let btn = capacity_btn_els[i];

        btn.addEventListener('click', function() {
            document.querySelector('.capacity .size.selected').classList.remove('selected');
            this.classList.add('selected');
        });
    }
}