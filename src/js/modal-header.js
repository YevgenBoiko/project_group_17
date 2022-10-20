(() => {
    const refs = {
        openModalBtn: document.querySelectorAll("[modal-header-open]"),
        closeModalBtn: document.querySelector("[modal-header-close]"),
        modal: document.querySelector("[modal-header]"),
    };

    for (var i = 0; i < refs.openModalBtn.length; i++) {
        refs.openModalBtn[i].addEventListener("click", toggleModal);
      }

    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();